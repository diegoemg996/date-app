import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/compras',
    name: 'Compras',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Compras.vue')
  },
  {
    path: "/index.html",
    redirect: "/" 
  }
  
  
]

const router = new VueRouter({
  mode: 'history',
  
})

export default router
