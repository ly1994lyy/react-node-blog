import http from "../utils/http"

export const getCate=()=>{
    return http.get('categories')
}