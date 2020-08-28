import React, { Fragment } from 'react'
import Main from '../../components/Main'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import axios from 'axios'

function index({data}) {
    return (
        <Fragment>
            <Main>
                {
                    data.map((item)=>{
                        return (
                            <Chip key={item._id} color="secondary" label={item.name} avatar={<Avatar>F</Avatar>} />
                        )
                    })
                }
            </Main>
        </Fragment>
    )
}

export async function getStaticProps() {
    const {data} = await axios.get('http://localhost:4000/web/api/categories')
    return {
      props: {
        data
      },
    }
  }

export default index
