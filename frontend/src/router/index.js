import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from '../components/IndexPage';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
