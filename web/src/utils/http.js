import axios from "axios";
import { notification, message } from "antd";
import NProgress from "nprogress"
import "nprogress/nprogress.css"

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/web/api',
  //baseURL: "http://localhost:4000/web/api",
});

//响应拦截器
http.interceptors.response.use(
  (res) => {
    NProgress.done();
    return res;
  },
  (err) => {
    if (err.response.status === 401) {
      notification.open({
        message: "sorry",
        description: "您得先登录",
      });
    } else {
      message.error(err.response.data.message);
    }

    return Promise.reject(err);
  }
);

//请求拦截器
http.interceptors.request.use(
  (config) => {
    NProgress.start();
    if (localStorage.usertoken) {
      config.headers.Authorization = "Bearer " + localStorage.usertoken;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const get = (url, params) => {
  return http.get(url, { params });
};

export const post = (url, data) => {
  return http.post(url, data);
};

export const put = (url, data) => {
  return http.put(url, data);
};

export const del = (url) => {
  return http.delete(url);
};
