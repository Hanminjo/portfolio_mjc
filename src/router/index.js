import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import portfolio1 from "../views/portfolio1.vue"
import portfolio2 from "../views/portfolio2.vue"
import portfolio3 from "../views/portfolio3.vue"
import portfolio4 from "../views/portfolio4.vue"
import portfolio5 from "../views/portfolio5.vue"
import portfolio6 from "../views/portfolio6.vue"
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portfolio1',
    component: portfolio1

  },
  {
    path: '/portfolio2',
    component: portfolio2

  },
  {
    path: '/portfolio3',
    component: portfolio3

  }
  , {
    path: '/portfolio4',
    component: portfolio4

  }
  , {
    path: '/portfolio5',
    component: portfolio5

  }
  , {
    path: '/portfolio6',
    component: portfolio6

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router