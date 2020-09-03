import React from 'react'
import Main from '../../components/Main'
import { getCate,getCateById } from '../../api/category'
import { Grid } from '@material-ui/core'
import ArtList from '../../components/ArtList'

function Category({articles}) {
    return (
        <Main>
            <Grid container>
            {
                articles.articles.map(art=>{
                    return (
                    <ArtList article={art} category={articles.name} key={art._id}></ArtList>
                    )
                })
            }
            </Grid>
        </Main>
    )
}


export async function getStaticPaths(){
    const res = await getCate()
    const paths = res.data.data.map((cate)=>({
        params:{_id:cate._id}
    }))
    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}){
    const res = await getCateById(params._id,{
        query:{populate:'articles'}
    })
    console.log(res.data)
    const articles = res.data
    return {
        props:{
            articles
        }
    }
}

export default Category
