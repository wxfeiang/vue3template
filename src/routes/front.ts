import { RouteRecordRaw } from 'vue-router';
export default {
  path: '/layout',
  component: () => import('@/layout/index.vue'),
  children: [
    {
      path: '/layout/home',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: 'choicecon',
        icon: 'el-icon-user',
      },
    },
    {
      path: '/layout/test',
      name: 'test',
      component: () => import('@/views/test/index.vue'),
    },
  ],
} as RouteRecordRaw;
