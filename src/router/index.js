import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home'
import application from './application'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home/'
  },
    // children:[
    //   {
    //     path: '/home/one',
    //     name: 'about',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    //   }
    // ]
  ...home,
  ...application,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
