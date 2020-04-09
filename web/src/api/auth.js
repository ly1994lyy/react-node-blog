import {post, del} from "../utils/http"

export const register = (data)=>{
    return post('/register',data)
}

export const login = (data)=>{
    return post('/login',data)
}

export const comment = (data)=>{
    return post('/comment',data)
}

export const like = (data)=>{
    return post('/like',data)
}

export const cancleLike = (userId,artId) =>{
    return del(`/like/${userId}/${artId}`)
}