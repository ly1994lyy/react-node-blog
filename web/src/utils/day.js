import dayjs from "dayjs"

export const dayGet = (value)=>{
    return dayjs(value).format("YYYY-MM-DD")
}