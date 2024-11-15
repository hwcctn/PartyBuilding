import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import legacy from '@vitejs/plugin-legacy'
import path from 'path' 
export default defineConfig({
  plugins: [vue(),
    createSvgIconsPlugin({
      iconDirs:[path.resolve(process.cwd(),'./src/assets/icons')],
      symbolId:'icon[dir]-[name]'
    }),
    legacy({
      targets: ['defaults', 'ie >= 11', 'chrome 52'], 
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'], 
    }),
  ],
})
