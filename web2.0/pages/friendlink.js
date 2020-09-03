import React from 'react'
import Main from '../components/Main'
import { getFriendLink } from '../api/friendlink'

function friendlink({friendLink}) {
    return (
        <Main>
            {
                friendLink.length>0?friendLink.map(item=>(
                <div>{item.title}</div>
                )):'暂无友链'
            }
        </Main>
    )
}


export async function getStaticProps(){
    const res = await getFriendLink()
    return {
        props:{
            friendLink:res.data.data
        }
    }
}

export default friendlink
