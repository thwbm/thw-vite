import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue({})],
  // 全局css
  css: {
    // 添加公共样式
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/style/all.scss";`,
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
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
