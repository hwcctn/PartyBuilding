import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import gloablComponent from './components/index'
import '@/assets/css/index.scss'
import 'virtual:svg-icons-register'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(gloablComponent)
app.use(router).use(createPinia()).mount('#app')
