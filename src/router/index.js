import Vue from 'vue'
import VueRouter from 'vue-router'
import Portfolio from '../views/Portfolio.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },

  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/Portfolio.vue')
  },

  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },

  {
    path: '/#',
    name: 'blog',
    component: () => import('../views/Blog.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
