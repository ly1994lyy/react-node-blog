import { get } from "../utils/http"

export const getArt = (params)=>{
    return get('/articles',params)
}

export const getArtById = (id)=>{
    return get(`/articles/${id}`)
}