import { get,post,put } from "../utils/http"

export const getOther = (keyWord) =>{
    return get('/other',keyWord)
}

export const getOtherById = (id) =>{
    return get(`/other/${id}`)
}

export const createOther = (data) =>{
    return post('/other',data)
}

export const putOther = (id,data) =>{
    return put(`/other/${id}`,data)
}
