import Vue from 'vue'
import Router from 'vue-router'
import routers from './router.js'

Vue.use(Router)
// 把routers.js中的路由在Main.js中实例化
// const router = new Router({
//   mode: 'history',
//   routes: routers
// })

export default new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'HelloWorld',
  //     component: HelloWorld
  //   }
  // ]
  routes: routers
})
