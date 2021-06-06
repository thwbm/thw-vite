import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import { resolve } from 'path'
const scssVariables = require('./src/style/all.scss.js')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({}),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: name => {
            name = name.slice(3)
            return `element-plus/packages/theme-chalk/src/${name}.scss`
          },
          resolveComponent: name => {
            return `element-plus/lib/${name}`
          },
        },
      ],
    }),
  ],
  // 全局css
  css: {
    // 添加公共样式
    preprocessorOptions: {
      scss: {
        additionalData: Object.keys(scssVariables)
          .map(k => `\$${k.replace('_', '-')}: ${scssVariables[k]};`)
          .join('\n'),
        // additionalData: `@import "./src/style/all.scss";`,
      },
    },
  },
  resolve: {
    // 目录别名
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    // 服务端口
    port: 8091,
    // 0.0.0.0可以使
    host: '0.0.0.0',
    // 代理
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
