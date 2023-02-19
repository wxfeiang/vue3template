/*
 * @Author: wxfeiang
 * @Description: ts 加入可提示的环境变量
 * @Date: 2023-02-19 22:12:38
 * @LastEditTime: 2023-02-19 22:13:09
 * @FilePath: /vue3template/env.d.ts
 */
interface ImportMetaEnv {
  readonly VITE_BASE_API: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
