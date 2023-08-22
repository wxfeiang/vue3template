import routes from '@/routes';
import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

//添加路由前缀
// routes.forEach((route) => {
//   if (!route.meta?.noPrefix) {
//     route.path = config.router.prefix + route.path
//   }
// })

const router = createRouter({
  history: createWebHistory(),
  routes,
  // scrollBehavior() {
  //   return { top: 0, behavior: 'smooth' }
  // },
});

// guard(router)

const setup = (app: App) => {
  app.use(router);
};
export { setup };
export default router;
