import type { App, DefineComponent } from 'vue'
import SvgIcon from './SvgIcon/index.vue'
import BaseInfo from './baseInfo/index.vue'
import User from './User/index.vue'

// 定义组件类型
type ComponentType = DefineComponent<{}, {}, any>

// 定义全局组件对象
const allGlobalComponent: Record<string, ComponentType> = {
  SvgIcon,
  BaseInfo,
  User
}

// 导出插件
export default {
  install(app: App) {
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key])
    })
  }
}
