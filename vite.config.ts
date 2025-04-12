import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import { BASE_URL } from './src/service/config/'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]'
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: 'src/auto-imports.d.ts'
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: BASE_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
        // bypass(req, res, options) {
        //   const finalPath = options.rewrite!(req.url || '') || ''
        //   const targetUrl = `${options.target}${finalPath}` // 直接拼接字符串
        //   console.log('代理目标路径:', targetUrl)
        // }
      }
    }
  }
})
