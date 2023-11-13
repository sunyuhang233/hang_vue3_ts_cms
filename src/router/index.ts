import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/main/Main.vue'),
      children: [
        {
          path: '/system/user',
          name: 'user',
          component: () => import('../views/system/user/user.vue')
        },
        {
          path: '/system/role',
          name: 'role',
          component: () => import('../views/system/role/role.vue')
        }
      ]
    }
  ]
})

export default router
