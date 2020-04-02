import dayjs from "dayjs"

export const dayGet = (value)=>{
    return dayjs(value).format("YYYY-MM-DD")
}

export const dayGetDetail = (value)=>{
    return dayjs(value).format("YYYY-MM-DD hh:mm:ss")
}
