import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main.vue'
import categroseEdit from '@/views/categroesEdit.vue'
import categroseList from '@/views/categroseList.vue'
import ItemEdit from '@/views/ItemEdit.vue'
import ItemList from '@/views/ItemList.vue'
import HeroEdit from '@/views/HeroEdit.vue'
import HeroList from '@/views/HeroList.vue'
import ArticleList from '@/views/ArticleList.vue'
import ArticleEdit from '@/views/ArticleEdit.vue'
import AdList from '@/views/AdList.vue'
import AdEdit from '@/views/AdEdit.vue'
import AdminUserList from '@/views/AdminUserList.vue'
import AdminUserEdit from '@/views/AdminUserEdit.vue'
import Login from '@/views/Login.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { isPublic: true }
    }, {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/categories/create',
          component: categroseEdit

        }, {
          path: '/categories/list',
          component: categroseList

        }, {
          path: '/categories/edit/:id',
          component: categroseEdit,
          props: true
        }, {
          path: '/items/create',
          component: ItemEdit

        }, {
          path: '/items/list',
          component: ItemList

        },
        {
          path: '/items/edit/:id',
          component: ItemEdit,
          props: true
        }, {
          path: '/heroes/create',
          component: HeroEdit

        }, {
          path: '/heroes/list',
          component: HeroList

        }, {
          path: '/heroes/edit/:id',
          component: HeroEdit,
          props: true
        }, {
          path: '/articles/create',
          component: ArticleEdit

        }, {
          path: '/articles/list',
          component: ArticleList

        },
        {
          path: '/articles/edit/:id',
          component: ArticleEdit,
          props: true
        },
        {
          path: '/ads/create',
          component: AdEdit

        }, {
          path: '/ads/list',
          component: AdList

        },
        {
          path: '/ads/edit/:id',
          component: AdEdit,
          props: true
        }, {
          path: '/admin_user/create',
          component: AdminUserEdit

        }, {
          path: '/admin_user/list',
          component: AdminUserList

        },
        {
          path: '/admin_user/edit/:id',
          component: AdminUserEdit,
          props: true
        }
      ]
    }]
})
router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})
export default router
