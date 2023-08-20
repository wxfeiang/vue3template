/*
 * @Author: wxfeiang
 * @Description: 工具类
 * @Date: 2022-11-26 00:22:22
 * @LastEditTime: 2023-07-03 10:21:43
 * @FilePath: /vue3template/src/utils/tool.ts
 */

/**
 * @description: 驼峰命名转换
 * @param {} value: String
 * @return {}
 */
export const toLine = (value: String) => {
  // 分组 - +
  return value.replace(/(A-Z)/g, '-$1').toLocaleLowerCase();
};
