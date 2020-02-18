// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/element.js'
import http from './http.js'
Vue.config.productionTip = false
Vue.prototype.$http = http
/* eslint-disable no-new */
Vue.mixin({
  methods: {
    getAuth () {
      return {
        Authorization: `Bearer ${localStorage.token || ''} `
      }
    }
  }
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
