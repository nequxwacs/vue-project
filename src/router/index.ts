import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Ch from '@/Ch.vue'

const routes: Array<RouteRecordRaw> = [
  {path: '/', component: Home },
  {path: '/register', component: Register },
  {path: '/login', component: Login },
  {path: '/about', component: Ch }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


// https://dummyjson.com