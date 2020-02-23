// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Card from './components/Card.vue'
import CardList from './components/CardList.vue'
import './assets/sass/style.scss'
import 'swiper/dist/css/swiper.css'
import './assets/iconfont/iconfont.css'
Vue.config.productionTip = false
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost3000/web/api'
})
Vue.component('m-card', Card)
Vue.component('list-card', CardList)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
