import React from 'react'
import { getArt, getArtById } from '../../api/article'
import Main from '../../components/Main'
import { TextField, InputAdornment } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';

function Article({article}) {
    return (
        <Main>
            <div className="f-c">
                <h1>{article.title}</h1>
            </div>
            <div>

            </div>
            <div dangerouslySetInnerHTML={{__html:article.body}}></div>
            <div>
                <TextField 
                    placeholder="欢迎评论" 
                    style={{width:"50%"}} 
                    label="评论" 
                    InputProps={{endAdornment:(
                        <InputAdornment position="end">
                            <SendIcon />
                        </InputAdornment>
                    )}}
                    />
            </div>
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