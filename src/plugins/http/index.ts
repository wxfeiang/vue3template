import request from './request';

const http = new request({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 10000,
});
const setup = () => {};
export { http, setup };
