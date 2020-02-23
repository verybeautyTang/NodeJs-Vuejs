import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Main from '@/views/Main'
import Article from '@/views/Article'
import Hero from '@/views/Hero'
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
        },
        {
          path: '/articles/:id',
          name: 'Article',
          component: Article,
          props: true
        }
      ]
    },
    {
      path: '/heroes/:id',
      name: 'Hero',
      component: Hero,
      props: true
    }
  ]
})
