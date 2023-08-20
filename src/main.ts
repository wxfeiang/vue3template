/*
 * @Author: wxfeiang
 * @Description:
 * @Date: 2023-02-19 09:55:35
 * @LastEditTime: 2023-08-20 16:59:42
 * @FilePath: /vue3template/src/main.ts
 */
import 'reset-css';
import 'tailwindcss/tailwind.css';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
//console.log(' HI: =222===', import.meta.env);
import router from './router'; // 默认查找当前路径下的 index.js，同 './router/index'

function bootstrap() {
  const app = createApp(App);
  // plugin(app)
  // directive(app)

  app.use(router);
  app.mount('#app');
}

bootstrap();
