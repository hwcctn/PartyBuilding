import { TIME_OUT } from './config'
import Request from './request'

const MYRequest = new Request({
  baseURL: '/api',
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    },
    responseSuccessFn: (res: any) => {
      const code = res?.response?.data?.code
      if (code === -1) {
        ElMessage({
          message: res.response.data.msg,
          grouping: true,
          type: 'error'
        })
      }
      return res
    },
    responseFailureFn: (err) => {
      console.log(err)
    }
  }
})

export default MYRequest
