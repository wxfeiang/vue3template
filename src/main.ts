/*
 * @Author: wxfeiang
 * @Description:
 * @Date: 2023-02-19 09:55:35
 * @LastEditTime: 2023-09-14 20:29:06
 * @FilePath: /vue3template/src/main.ts
 */

import 'tailwindcss/tailwind.css';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
//console.log(' HI: =222===', import.meta.env);

import plugin from '@/plugins'; // 引入所有的插件

function bootstrap() {
  const app = createApp(App);
  plugin(app);
  // directive(app)

  app.mount('#app');
}

bootstrap();
