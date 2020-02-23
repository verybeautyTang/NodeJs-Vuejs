import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Main from '@/views/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        }
      ]
    }
  ]
})
