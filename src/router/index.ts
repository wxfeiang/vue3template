import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

/**
 * 私有路由表

const privateRoutes = [
  {
    path: '/user',
    component: layout,
    redirect: '/user/manage',
    meta: {
      title: '用户管理',
      icon: 'icon-yonghu1'
    },
    children: [
      {
        path: '/user/manage',
        name: 'manger',
        component: () => import('@/views/user-manage/index'),
        meta: {
          title: 'userManger',
          icon: 'el-icon-user'
        }
      },
      {
        path: '/user/role',
        name: 'role',
        component: () => import('@/views/role-list/index'),
        meta: {
          title: 'rolelist',
          icon: 'icon-authority'
        }
      },
      {
        path: '/user/permission',
        name: 'permission',
        component: () => import('@/views/permission-list/index'),
        meta: {
          title: 'permissionlist',
          icon: 'icon-jiaoseguanli'
        }
      },
      {
        path: '/user/info/:id',
        name: 'userinfo',
        component: () => import('@/views/user-info/index'),
        meta: {
          title: 'userinfo'
        }
      },
      {
        path: '/user/import',
        name: 'import',
        component: () => import('@/views/import/index'),
        meta: {
          title: 'import'
        }
      }
    ]
  },
  {
    path: '/article',
    component: layout,
    redirect: '/article/ranking',
    meta: {
      title: 'article',
      icon: 'icon-hengpai'
    },
    children: [
      {
        path: '/article/ranking',
        name: 'articleRanking',
        component: () => import('@/views/article-ranking/index'),
        meta: {
          title: 'articleRanking',
          icon: 'icon-wenzhang'
        }
      },
      {
        path: '/article/: id',
        name: 'articleDetail',
        component: () => import('@/views/article-detail/index'),
        meta: {
          title: 'articleDetail'
        }
      },
      {
        path: '/article/editor/:id',
        name: 'articleEditor',
        component: () => import('@/views/article-create/index'),
        meta: {
          title: 'articleEditor'
        }
      }
    ]
  }
]
 */
/*
公开的路由表
*/

const publicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404.vue'),
  },
  {
    path: '/datav',
    name: 'datav',
    component: () => import('@/views/datav/index.vue'),
  },
  {
    path: '/',
    redirect: 'home',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'icon-gerenzhongxin',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: 'choicecon',
          icon: 'el-icon-user',
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes], //  路由合并
});

export default router;
