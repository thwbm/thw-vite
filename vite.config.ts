import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
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
  server: {
    // 服务端口
    port: 8090,
    // 代理
    proxy: {
      "/api": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
