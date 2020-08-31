import { get } from '../utils/http'

export const getAbout = (params)=>{
    return get('/about',params)
}
