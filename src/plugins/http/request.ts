/*
 * @Author: wxfeiang wxfeiang@qq.com
 * @Description:   请求方法 组件库自动导入了
 * @Date: 2023-08-28 09:06:24
 * @LastEditors: wxfeiang wxfeiang@qq.com
 * @LastEditTime: 2023-08-28 15:26:36
 * @FilePath: /vue3template/src/plugins/http/request.ts
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
 */

import router from '@/router';
import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
interface IOptions {
  loading?: boolean;
  message?: boolean;
  clearValidateError?: boolean;
}
const storage = useStorage();
export default class Axios {
  private instance;
  private loading: any;
  private options: IOptions = {
    loading: true,
    message: true,
    clearValidateError: true,
  };
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors();
  }

  public async request<T>(config: AxiosRequestConfig, options?: IOptions) {
    this.options = Object.assign(this.options, options ?? {});
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<T>(config);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    }) as Promise<T>;
  }

  private interceptors() {
    this.interceptorsRequest();
    this.interceptorsResponse();
  }

  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (!this.loading && this.options.loading) {
          this.loading = ElLoading.service({
            background: 'rgba(255,255,255,0.1)',
            fullscreen: true,
          });
        }
        if (this.options.clearValidateError) useErrorStore().resetError();
        config.headers.Accept = 'application/json';
        config.headers.Authorization = `${storage.get(CacheEnum.TOKEN_NAME)}`;
        // FIX: 暂时去掉token 前缀 Bearer ，后端有返回

        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      },
    );
  }
  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response) => {
        if (this.loading) {
          this.loading.close();
          this.loading = undefined;
        }
        const message = response.data?.success ?? response.data?.success;
        if (message && this.options.message) {
          ElMessage({
            type: 'success',
            message,
            grouping: true,
            duration: 2000,
          });
        }

        this.options = {
          loading: true,
          message: true,
          clearValidateError: true,
        };
        return response;
      },
      (error) => {
        if (this.loading) {
          this.loading.close();
          this.loading = undefined;
        }
        this.options = {
          loading: true,
          message: true,
          clearValidateError: true,
        };
        const {
          response: { status, data, statusText },
        } = error;
        const message = data.error ?? data.message;

        switch (status) {
          case HttpCodeEnum.UNAUTHORIZED:
            storage.remove(CacheEnum.TOKEN_NAME);
            router.push({ name: RouteEnum.LOGIN });
            break;
          case HttpCodeEnum.UNPROCESSABLE_ENTITY:
            useErrorStore().setErrors(
              error.response.data.errors ?? error.response.data,
            );
            break;
          case HttpCodeEnum.FORBIDDEN:
            ElMessage({ type: 'error', message: message ?? '没有操作权限' });
            break;
          case HttpCodeEnum.NOT_FOUND:
            ElMessage.error('请求资源不存在');
            router.push({ name: RouteEnum.HOME });
            break;
          case HttpCodeEnum.TOO_MANY_REQUESTS:
            ElMessage({ type: 'error', message: '请求过于频繁，请稍候再试' });
            break;
          case HttpCodeEnum.INTERNAL_SERVER_ERROR:
            ElMessage({ type: 'error', message: statusText });
            break;

          default:
            if (message) {
              ElMessage({ type: 'error', message: message ?? '服务器错误' });
            }
        }
        return Promise.reject(error);
      },
    );
  }
}
