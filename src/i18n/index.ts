import { createI18n } from 'vue-i18n'
import enLocale from 'element-plus/lib/locale/lang/en'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'

// 国际化 => element-plus按需加载不可用
// import ElementLocale from 'element-plus/lib/locale'

const messages = {
  [enLocale.name]: {
    el: enLocale.el,
    message: {
      hello: 'hello world',
    },
  },
  [zhLocale.name]: {
    el: zhLocale.el,
    message: {
      hello: '你好，世界',
    },
  },
}

const i18n = createI18n({
  locale: zhLocale.name,
  fallbackLocale: enLocale.name,
  messages,
})

// ElementLocale.i18n(i18n.global.t)

export default i18n
