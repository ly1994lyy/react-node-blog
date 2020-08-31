import { get } from '../utils/http'

export const getOther = (params)=>{
    return get('/other',params)
}