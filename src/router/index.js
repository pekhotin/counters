import Vue from 'vue'
import Router from 'vue-router'
import Authentication from '@/components/Authentication'
import HomePage from '@/components/HomePage'
import Request from '@/components/Request'
import ShowRequest from '@/components/ShowRequest'
import Requests from '@/components/Requests'
import Personal from '@/components/Personal'
import current from '@/components/current'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'Authentication',
      component: Authentication,
      meta: {
        guest: true
      }
    },
    {
      path: '/home',
      component: HomePage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/requests/:id',
      component: ShowRequest,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/requests/create/:type',
      component: Request,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/requests',
      component: Requests,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/personal',
      component: Personal,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/current',
      component: current,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('login') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('login') == null) {
      next()
    } else {
      next({
        name: 'login'
      })
    }
  } else {
    next()
  }
})

export default router
