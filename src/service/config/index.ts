// 1.手动切换
export const BASE_URL = 'http://110.41.185.84:8888'
// export const BASE_URL = 'https://www.wanandroid.com'
export const TIME_OUT = 10000

// 2.依赖当前环境: development/production
// console.log(process.env.NODE_ENV)
// let BASE_URL = ''
// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://codercba.dev:9002'
// } else {
//   BASE_URL = 'http://codercba.prod:9002'
// }

// export { BASE_URL }

// 3.从定义的环境变量的配置文件中, 加载变量
// console.log(process.env.REACT_APP_BASE_URL)
// 在.env.development 中集成环境变量，注意自定义变量以REACT_APP开头
// 在.env.production
// 在 .env.test
// 还要在shims-vue.d.ts中声明
// declare const VUE_APP_BASE_URL:string
