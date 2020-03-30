import { get,post,del,put } from "../utils/http"

export const getArticle = (keyWord) =>{
    return get('/articles',keyWord)
}

export const getArticleById = (id) =>{
    return get(`/articles/${id}`)
}

export const createArticle = (data) =>{
    return post('/articles',data)
}

export const putArticle = (id,data) =>{
    return put(`/articles/${id}`,data)
}

export const delArticle = (id) =>{
    return del(`/articles/${id}`)
}