import React, { Fragment } from 'react'
import Main from '../../components/Main'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import { getCate } from '../../api/category'

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
    const {data} = await getCate({
        query:{limit:100}
    })
    return {
      props: {
        data:data.data
      },
    }
  }

export default index
