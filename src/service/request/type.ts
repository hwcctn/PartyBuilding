import type {
  InternalAxiosRequestConfig,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'

// 对AxiosRequestConfig配置进行扩展
export interface HYInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>

  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export interface MYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYInterceptors<T>
  addToken?: boolean
}
