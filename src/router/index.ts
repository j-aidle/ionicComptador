import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import ComptadorPage from '../views/ComptadorPage.vue'
import PostsPage from '../views/PostsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/comptador',
    name: 'Comptador',
    component: ComptadorPage
  },
  {
    path: '/posts',
    name: 'Posts',
    component: PostsPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
