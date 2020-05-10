import Vue from 'vue'
import VueRouter from 'vue-router'
import Portfolio from '../components/Portfolio.vue'
import About from '../components/About.vue'
import Blog from '../components/Blog.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },

  {
    path: '/about',
    name: 'about',
    component: About
  },

  {
    path: '/#',
    name: 'blog',
    component: Blog
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //       route level code-splitting
  //       this generates a separate chunk (about.[hash].js) for this route
  //       which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
