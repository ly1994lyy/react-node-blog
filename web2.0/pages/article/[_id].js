import React from 'react'
import { getArt, getArtById } from '../../api/article'
import Main from '../../components/Main'

function Article({article}) {
    return (
        <Main>
            <h1>{article.title}</h1>
            <div dangerouslySetInnerHTML={{__html:article.body}}></div>
        </Main>
    )
}

export async function getStaticPaths(){
    const res = await getArt()
    const paths =  res.data.data.map((article)=>({
        params:{_id:article._id}
    }))
    return{
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}){
    const articleData = await getArtById(params._id)
    return {
        props:{
            article:articleData.data
        }
    }
}

export default Article