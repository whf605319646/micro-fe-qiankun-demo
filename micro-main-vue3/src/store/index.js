import { createStore } from 'vuex'

 // 新增
const storagePlugin = store => {
  const token = localStorage.getItem('token')
  if(token) {
    store.commit('setToken', token)
  }
};

export default createStore({
  state: {
    token: ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      // 新增，登录的时候同时把token存到localStorage
      localStorage.setItem('token', token);
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [storagePlugin]
})