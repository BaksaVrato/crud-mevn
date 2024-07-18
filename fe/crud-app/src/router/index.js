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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
