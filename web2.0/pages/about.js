import React from 'react'
import Main from '../components/Main'
import { getAbout } from '../api/about'

function about({data}) {
  return (
    <Main>
      <p dangerouslySetInnerHTML={{__html:data.body}}></p>
    </Main>
  )
}

export default about


export async function getStaticProps(){
    const res = await getAbout()
    const data = res.data.data[0]
    return {
      props:{
        data,
      }
    }
}