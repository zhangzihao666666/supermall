import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('@/views/home/Home.vue')
const Shop = () => import('@/views/Shop.vue')
const Class = () => import('@/views/Class.vue')
const Profile =() => import('@/views/Profile.vue')
const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    component: Home,
  },
  {
    path:'/Shop',
    component: Shop
  },
  {
    path: '/Class',
    component: Class
  },
  {
    path: '/Profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
