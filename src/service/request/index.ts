import axios from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import type { MYRequestConfig } from './type'
import router from '@/router'
import { ElMessage } from 'element-plus'
const DEAFULT_ADDTOKEN = true
class Request {
  instance: AxiosInstance
  addToken: boolean
  constructor(config: MYRequestConfig) {
    this.instance = axios.create(config)
    this.addToken = config.addToken ?? DEAFULT_ADDTOKEN
    this.instance.interceptors.request.use(
      (config) => {
        // loading/token
        // console.log(this.addToken)
        if (this.addToken) {
          const token = localStorage.getItem('token')
          config.headers.Authorization = token
        }
        return config
      },
      (err) => {
        // console.log(err)
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        const { code, msg } = res.data ?? {}

        if (code === 401) {
          router.push('/login')
          ElMessage.error(msg || '登录已过期，请重新登录')
          return
        }

        if (code === 403) {
          router.push('/403')
          ElMessage.error(msg || '无权限访问')
          return
        }
        if (code === 500) {
          ElMessage.error(msg || '服务器内部错误，请稍后重试')
          return
        }

        if (code !== undefined && code !== 0 && code !== 200) {
          ElMessage.warning(msg || '请求失败，请稍后重试')
          return
        }

        return res.data
      },
      (err) => {
        ElMessage.error('网络异常，请检查网络连接')
        return Promise.reject(err)
      }
    )

    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }

  request<T = any>(config: MYRequestConfig<T>) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessFn) {
      // config = config.interceptors.requestSuccessFn(config);
      config = {
        ...config,
        ...config.interceptors.requestSuccessFn(
          config as InternalAxiosRequestConfig
        )
      }
    }
    // console.log(config.addToken)
    if (config.addToken === !DEAFULT_ADDTOKEN) {
      this.addToken = config.addToken
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单次响应的成功拦截处理
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          this.addToken = DEAFULT_ADDTOKEN
          resolve(res)
        })
        .catch((err) => {
          this.addToken = DEAFULT_ADDTOKEN
          reject(err)
        })
    })
  }

  get<T = any>(config: MYRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: MYRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: MYRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: MYRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
  put<T = any>(config: MYRequestConfig<T>) {
    return this.request({ ...config, method: 'PUT' })
  }
}

export default Request
