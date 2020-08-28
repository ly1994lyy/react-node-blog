import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ChevronRightRounded from "@material-ui/icons/ChevronRightRounded";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useWideCardMediaStyles } from "@mui-treasury/styles/cardMedia/wide";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import { useBouncyShadowStyles } from "@mui-treasury/styles/shadow/bouncy";
import Main from "../components/Main";
import { Grid } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    margin: "auto",
    boxShadow: "none",
    borderRadius: 0,
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
}));

export const NewsCardDemo = React.memo(function NewsCard({ articles }) {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  return (
    <Main>
      <Grid container>
        {articles.map((item) => {
          return (
            <Card key={item._id} className={cx(styles.root, shadowStyles.root)} style={{marginTop:'15px'}}>
              <CardMedia
                classes={mediaStyles}
                image={
                  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598604938634&di=3deb10a2a5b3eadac9b3764e1441eb5b&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D2247852322%2C986532796%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853"
                }
              />
              <CardContent className={styles.content}>
                <TextInfoContent
                  classes={textCardContentStyles}
                  overline={item.created}
                  heading={item.title}
                  body={item.body}
                />
                <Button color={"primary"} fullWidth className={styles.cta}>
                  查看全文 <ChevronRightRounded />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </Grid>
    </Main>
  );
});

export async function getStaticProps() {
  const {data} = await axios.get("http://localhost:4000/web/api/articles")
  return {
    props: {
      articles:data.model,
      total:data.total
    },
  }
}

export default NewsCardDemo;
