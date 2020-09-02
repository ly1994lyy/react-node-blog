import React, { Fragment } from "react";
import Main from "../../components/Main";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import { getCate } from "../../api/category";
import { Grid } from "@material-ui/core";
import { useRouter } from "next/router";

function index({ data }) {
    const router = useRouter()
  return (
    <Fragment>
      <Main>
        <Grid container>
            {data.map((item) => {
              return (
                <Grid item>
                <Chip
                  style={{marginTop:'30px',marginLeft:'50px',cursor:"pointer"}}
                  key={item._id}
                  label={item.name}
                  size="medium"
                  onClick={()=>router.push(`/category/${item._id}`)}
                  avatar={<Avatar>{item.name[0]}</Avatar>}
                />
                 </Grid>
              );
            })}
         
        </Grid>
      </Main>
    </Fragment>
  );
}

export async function getStaticProps() {
  const { data } = await getCate({
    query: { limit: 100 },
  });
  return {
    props: {
      data: data.data,
    },
  };
}

export default index;
