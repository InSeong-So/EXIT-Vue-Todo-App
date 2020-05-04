import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'
import TodoPage from '@/components/TodoPage'

import axios from 'axios'

Vue.prototype.$http = axios

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoPage',
      component: TodoPage
    },
    {
      path:'/login',
      name:'LoginPage',
      component: LoginPage
    }
  ]
});
