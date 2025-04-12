/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}
// declare module 'vite-plugin-svg-icons/client' {
//   const content: unknown
//   export default content
// }
declare module 'virtual:svg-icons-register' {
  const content: void
  export default content
}
// declare module 'element-plus' {
//   export const ElMessage: (typeof import('element-plus'))['ElMessage']
// }
// declare global {
//   const ElMessage: (typeof import('element-plus'))['ElMessage']
// }
