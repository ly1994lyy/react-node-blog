import React from "react";
import Main from "../components/Main";
import { Grid } from "@material-ui/core";
import { getArt } from '../api/article'
import ArtList from "../components/ArtList";


export const ArticleList = React.memo(function NewsCard({ articles }) {
  return (
    <Main>
      <Grid container>
        {articles.map((item) => {
          return (
            <ArtList article={item} key={item._id}></ArtList>
          );
        })}
      </Grid>
    </Main>
  );
});

export async function getStaticProps() {
  const res = await getArt({
    query:{limit:100}
  })
  return {
    props: {
      articles:res.data.data,
      total:res.data.total
    },
  }
}

export default ArticleList;
