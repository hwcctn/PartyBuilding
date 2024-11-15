import { createApp } from 'vue'
import './style.css'
import './assets/iconfont.css'
import App from './App.vue'
import router from './router'
import gloablComponent from './components/index'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
const app=createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(gloablComponent)
app.use(ElementPlus).use(router).mount('#app')


