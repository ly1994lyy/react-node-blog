import {post,get,del} from "../utils/http"

export const login = (data)=>{
    return post('/login',data)
}

export const getUser = (params)=>{
    return get('/user',params)
}

export const delUser = (id)=>{
    return del(`/user/${id}`)
}