import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// element-plus 按需加载
// import { useElementPlus } from './elementPlus'

// 全局引入
import ElementPlus from 'element-plus'

import './style/element-variables.scss'
import './style/body.scss'

import { i18n, t } from '@/i18n'

const app = createApp(App)
app.config.globalProperties.$t = t // 全局配置 this.$
// useElementPlus(app)
app.use(ElementPlus, { size: 'small', zIndex: 3000, i18n: i18n.global.t })
app.use(i18n)
app.use(router)
app.mount('#app')
