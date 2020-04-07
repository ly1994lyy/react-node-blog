import {post} from "../utils/http"

export const register = (data)=>{
    return post('/register',data)
}

export const login = (data)=>{
    return post('/login',data)
}

export const comment = (data)=>{
    return post('/comment',data)
}