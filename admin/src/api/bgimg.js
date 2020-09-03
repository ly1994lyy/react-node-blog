import { get,post,put, del } from "../utils/http"

export const getBgImg = (keyWord) =>{
    return get('/bgimage',keyWord)
}

export const getBgImgById = (id) =>{
    return get(`/bgimage/${id}`)
}

export const createBgImg = (data) =>{
    return post('/bgimage',data)
}

export const putBgImg = (id,data) =>{
    return put(`/bgimage/${id}`,data)
}

export const delBgImg = (id) =>{
    return del(`/bgimage/${id}`)
}
