import axios from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import type { MYRequestConfig } from './type'
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
        return res.data
      },
      (err) => {
        // console.log(err)
        return err
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
