import { createI18n } from 'vue-i18n'
import enLocale from 'element-plus/lib/locale/lang/en'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'

// 自定义配置
import en from '@/i18n/en'
import zhCn from '@/i18n/zh-cn'

// 国际化 => element-plus按需加载不可用
// import ElementLocale from 'element-plus/lib/locale'

const messages = {
  [enLocale.name]: {
    el: enLocale.el,
    ...en,
  },
  [zhLocale.name]: {
    el: zhLocale.el,
    ...zhCn,
  },
}

const i18n = createI18n({
  locale: zhLocale.name,
  // fallbackLocale: enLocale.name,
  messages,
})

// ElementLocale.i18n(i18n.global.t)

const t = i18n.global.t

export { i18n, t }
