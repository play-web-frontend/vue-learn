import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
// import Login from '@/components/Login'
import Home from '@/pages/Home'
import UserPermissionAssignment from '@/pages/UserPermissionAssignment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/user-permission',
      name: 'UserPermission',
      component: UserPermissionAssignment
    }
  ]
})
