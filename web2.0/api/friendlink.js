import { get } from "../utils/http"

export const getFriendLink = (params)=>{
    return get('/friendlink',params)
}