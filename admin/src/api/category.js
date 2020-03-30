import { get,post,del,put } from "../utils/http"

export const getCategory = (keyWord) =>{
    return get('/categories',keyWord)
}

export const getCategoryById = (id) =>{
    return get(`/categories/${id}`)
}

export const createCategory = (data) =>{
    return post('/categories',data)
}

export const putCategory = (id,data) =>{
    return put(`/categories/${id}`,data)
}

export const delCategory = (id) =>{
    return del(`/categories/${id}`)
}