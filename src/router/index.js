import Vue from 'vue'
import Router from 'vue-router'

import Index from '../views/Index.vue'
import Show from '../views/Show.vue'

Vue.use(Router)

const router = new Router({
  linkExactActiveClass: 'active',
  // linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/:id',
      name: 'show',
      props: true,
      component: Show
    }
  ]
})

export default router
