import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { useRouter } from "next/router";

const CardList = ({ article,category }) => {
  const router = useRouter();
  return (
    <Card className={"MuiNewsCard--01"}>
      <CardMedia
        className={"MuiCardMedia-root"}
        image={
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598604938634&di=3deb10a2a5b3eadac9b3764e1441eb5b&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D2247852322%2C986532796%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853"
        }
      >
        <Typography className={"MuiTypography--category"}>
            {category?category:'文章'}
        </Typography>
      </CardMedia>
      <CardContent className={"MuiCardContent-root"}>
        <Typography
          className={"MuiTypography--overline"}
          variant={"overline"}
          gutterBottom
        >
          {article.created}
        </Typography>
        <Typography
          className={"MuiTypography--heading"}
          variant={"h6"}
          gutterBottom
        >
          {article.title}
        </Typography>
        <Typography className={"MuiTypography--subheading"} variant={"caption"}>
            {article.body}
        </Typography>
      </CardContent>
      <CardActions className={"MuiCardActions-root"}>
        <Button
          color={"primary"}
          fullWidth
          onClick={() => router.push(`/article/${article._id}`)}
        >
          查看全文 <Icon>chevron_right_rounded</Icon>
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardList;
