import {get} from "../utils/http"

export const getCate = (params)=>{
    return get('/categories',params)
}

export const getCateById = (id)=>{
    return get(`/categories/${id}`)
}