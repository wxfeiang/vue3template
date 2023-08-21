/*
 * @Author: wxfeiang
 * @Description: 配置组件导入
 * @Date: 2023-05-21 22:03:24
 * @LastEditTime: 2023-08-21 22:34:57
 * @FilePath: /vue3template/core/auto-import.ts
 */

import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

//自动导入插件
export default [
  // 自动引入
  AutoImport({
    imports: ['vue', 'vue-router'],
    resolvers: [
      ElementPlusResolver(),
      IconsResolver({
        prefix: 'Icon',
      }),
    ], // 自动按需UI组件库
    dirs: ['./src/components', 'src/composables/**/*'], //  自动导入自己的模块
    dts: 'core/types/auto-imports.d.ts', // 可以自定义文件生成的位置，默认是根目录下
    vueTemplate: true,
    defaultExportByFilename: true,
    eslintrc: {
      enabled: true,
    },
  }),
  // 按需引入
  Components({
    // 可以让我们使用自己定义组件的时候免去 import 的麻烦
    dirs: ['src/components'], //默认为 src/components
    dts: 'core/types/components.d.ts', // 可以自定义文件生成的位置，默认是根目录下
    extensions: ['vue', 'md', 'jsx', 'ts', 'tsx'], // 配置需要将哪些后缀类型的文件进行自动按需引入
    // 第三方组件库的解析器
    resolvers: [
      ElementPlusResolver(),
      IconsResolver({
        // 自动注册图标组件
        enabledCollections: ['ep'],
      }),
    ],
  }),
  Icons({
    autoInstall: true,
  }),
];
