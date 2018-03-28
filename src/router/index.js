import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Login from '@/components/Login'
import Home from '@/components/Home'
import UserPermissionAssignment from '@/components/UserPermissionAssignment'

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
      path: '/user-permission-assignment',
      name: 'Home',
      component: UserPermissionAssignment
    }
  ]
})
