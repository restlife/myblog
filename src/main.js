// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'



Vue.use(Vuex);

Vue.config.productionTip = false;
const store = new Vuex.Store({
  state: {
    nickName:''
  },
  mutations: {
    //更新用户信息
    updateUserInfo(state, nickName) {
       state.nickName = nickName;
    }
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
