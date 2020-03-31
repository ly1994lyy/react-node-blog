import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:4000/web/api"
});

export const get = (url, params) => {
  return http.get(url, { params });
};

export const post = (url, data) => {
  return http.post(url, data);
};

export const put = (url, data) => {
  return http.put(url.data);
};

export const del = url => {
  return http.delete(url);
};
