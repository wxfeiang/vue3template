/*
 * @Author: wxfeiang
 * @Description: 工具类
 * @Date: 2022-11-26 00:22:22
 * @LastEditTime: 2023-02-19 17:26:39
 * @FilePath: /vue3template/src/utils/tool.ts
 */
// 驼峰命名转换
export const toLine = (value: String) => {
  // 分组 - +
  return value.replace(/(A-Z)/g, '-$1').toLocaleLowerCase();
};
