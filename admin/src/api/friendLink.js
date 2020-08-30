import { get,post,put,del } from "../utils/http"

export const getFriendLink = () =>{
    return get('/friendlink')
}

export const getFriendLinkById = (id) =>{
    return get(`/friendlink/${id}`)
}

export const createFriendLink = (data) =>{
    return post('/friendlink',data)
}

export const putFriendLink = (id,data) =>{
    return put(`/friendlink/${id}`,data)
}

export const delFriendLink = (id)=>{
    return del(`/friendlink/${id}`)
}