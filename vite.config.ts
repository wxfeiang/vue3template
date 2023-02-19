/*
 * @Author: wxfeiang
 * @Description: 项目配置文件
 * @Date: 2023-02-19 09:55:35
 * @LastEditTime: 2023-02-19 22:04:40
 * @FilePath: /vue3template/vite.config.ts
 */
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './.env');
  const result = {
    plugins: [vue()],
    envDir: './.env',
    envPrefix: ['VITE_', 'DZ_'],
    // build: {
    //   manifest: true,
    //   outDir: `./dist/${mode}`,
    // },

    resolve: {
      //设置别名
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },

    server: {
      port: 3500, //启动端口
      hmr: {
        host: '127.0.0.1',
        port: 3500,
      },
      // 设置 https 代理
      proxy: {
        [env.VITE_BASE_URL]: {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
  return result;
});
