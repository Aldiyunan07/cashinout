import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/cashes',
    name: 'cashes.index',
    component: () => import(/* webpackChunkName: "cashes" */ '../views/cashes/IndexView.vue'),
    meta :{ auth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/auth/LoginView.vue'),
    meta:{ guest:true }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/auth/RegisterView.vue'),
    meta: { guest:true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'bg-blue-500 text-white rounded-lg'
})

router.beforeEach((to, from, next) =>{
  if(to.meta.auth && !store.getters['auth/authenticated']) router.push('/login')
  if(to.meta.guest && store.getters['auth/authenticated']) router.push('/')

  next()
})

export default router
