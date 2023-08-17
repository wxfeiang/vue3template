/*
 * @Author: wxfeiang
 * @Description:
 * @Date: 2023-02-19 09:55:35
 * @LastEditTime: 2023-08-17 21:45:35
 * @FilePath: /vue3template/src/main.ts
 */
import 'reset-css';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
//console.log(' HI: =222===', import.meta.env);
import router from './router'; // 默认查找当前路径下的 index.js，同 './router/index'

const app = createApp(App);
app.use(router);
app.mount('#app');
