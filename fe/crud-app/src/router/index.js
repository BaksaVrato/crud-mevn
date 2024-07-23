import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'read',
    component: () => import('../views/ReadView.vue')  
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/CreateView.vue')
  },
  {
    path: '/update',
    name: 'update',
    component: () => import('../views/UpdateView.vue')
  },
  {
    path: '/delete',
    name: 'delete',
    component: () => import('../views/DeleteView.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404View.vue')
  },
  {
    path: '/500',
    name: '500',
    component: () => import('../views/500View.vue')
  },
  {
    path: '/400',
    name: '400',
    component: () => import('../views/400View.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
