import {get} from "../utils/http"

export const getArt = (params)=>{
    return get('/articles',params)
}