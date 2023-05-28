/*
 * @Author: wxfeiang
 * @Description:
 * @Date: 2023-05-28 11:00:19
 * @LastEditTime: 2023-05-28 11:41:58
 * @FilePath: /vue3template/core/proxy.ts
 */

interface proxyINfo {
  api: string;
  target: string;
  changeOrigin: Boolean;
  replace?: string;
}

const data: proxyINfo[] = [
  {
    api: 'api',
    target: 'ta',
    changeOrigin: true,
  },
];

const procyFun = (arr) => {
  return arr.map((item: proxyINfo) => {
    return {
      [item.target]: {
        target: item.target,
        changeOrigin: item.changeOrigin,
        rewrite: (path) =>
          path.replace(new RegExp('^' + item.api), item.replace ?? ''),
      },
    };
  });
};
