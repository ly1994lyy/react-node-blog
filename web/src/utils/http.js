import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:4000/web/api"
});

http.interceptors.response.use(res=>{
  return res
},err=>{
  return Promise.reject(err)
})

http.interceptors.request.use(config=>{
  return config
},err=>{
  return Promise.reject(err)
})

export const get = (url, params) => {
  return http.get(url, { params });
};

export const post = (url, data) => {
  return http.post(url, data);
};

export const put = (url, data) => {
  return http.put(url,data);
};

export const del = url => {
  return http.delete(url);
};
