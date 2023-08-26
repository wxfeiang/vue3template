import { RouteRecordRaw } from 'vue-router';

export default {
  path: '/',
  component: () => import('@/views/auth/index.vue'),
  // meta: { noPrefix: true },
  children: [
    {
      path: 'login',
      name: 'login',
      component: () => import('@/views/auth/index.vue'),
    },
    {
      path: 'dataV',
      name: 'dataV',
      component: () => import('@/views/datav/index.vue'),
    },
    // {
    //   path: 'register',
    //   name: 'register',
    //   component: () => import('@/views/auth/register.vue'),
    // },
    // {
    //   path: 'forgot_password',
    //   name: 'forgot_password',
    //   component: () => import('@/views/auth/forgot_password.vue'),
    // },
  ],
} as RouteRecordRaw;
