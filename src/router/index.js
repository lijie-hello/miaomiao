import Vue from 'vue'
import VueRouter from 'vue-router'
import cinemaRouter from './Cinema'
import mineRouter from './Mine'
import moviemaRouter from './Movie'

Vue.use(VueRouter)

const routes = [
  cinemaRouter,
  mineRouter,
  moviemaRouter,
  { path: '/*', redirect: '/cinema' }
]

const router = new VueRouter({
  routes
})

export default router
