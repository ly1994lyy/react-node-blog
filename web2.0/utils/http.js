import axios from 'axios'
import Alert from '@material-ui/lab/Alert'

const http = axios.create({
    baseURL:'http://localhost:3009'
})

http.interceptors.request.use(config=>{
    return config
},err=>{
    return Promise.reject(err)
})


http.interceptors.response.use(res=>{
    if(res.status === '401'){
        return <Alert severity="error">对不起，需要您先登录呢~</Alert>
    }
    return res
},err=>{
    return Promise.reject(err)
})

export const get = (url,params)=>{
    return http.get(url,{params})
}

export const post = (url, data) => {
    return http.post(url, data);
  };
  
  export const put = (url, data) => {
    return http.put(url, data);
  };
  
  export const del = (url) => {
    return http.delete(url);
  };
