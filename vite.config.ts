/*
 * @Author: wxfeiang
 * @Description: 项目配置文件
 * @Date: 2023-02-19 09:55:35
 * @LastEditTime: 2023-03-19 10:43:54
 * @FilePath: /vue3template/vite.config.ts
 */
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig, loadEnv } from 'vite';
// 可以解构更多
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './.env');
  const result = {
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router'],
        //resolvers: [ElementPlusResolver()], // 自动按需UI组件库
        //dirs: ['./src/components'], //  自动导入自己的模块
        dts: 'src/auto-imports.d.ts', // 可以自定义文件生成的位置，默认是根目录下
        eslintrc: {
          enabled: true,
        },
      }),
      Components({
        // dirs 指定组件所在位置，默认为 src/components
        // 可以让我们使用自己定义组件的时候免去 import 的麻烦
        dirs: ['src/components/'],
        // 配置需要将哪些后缀类型的文件进行自动按需引入
        extensions: ['vue', 'md'],
        // 解析的 UI 组件库，这里以 Element Plus 和 Ant Design Vue 为例
        // 第三方组件库的解析器
        resolvers: [ElementPlusResolver()],
      }),
    ],
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
        host: '0.0.0.0',
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
