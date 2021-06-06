import { createStore } from 'vuex'
import userInfo from './modules/userInfo'

const store = createStore({
  ...userInfo,
})

export default store
