import { get,post,put } from "../utils/http"

export const getAbout = (keyWord) =>{
    return get('/about',keyWord)
}

export const getAboutById = (id) =>{
    return get(`/about/${id}`)
}

export const createAbout = (data) =>{
    return post('/about',data)
}

export const putAbout = (id,data) =>{
    return put(`/about/${id}`,data)
}
