import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styles from './Nav.module.scss'
import AndroidIcon from "@material-ui/icons/Android";

function Nav() {
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar className={styles.navbox}>
          <AndroidIcon color="action" style={{marginLeft:'130px'}} />
          <Typography variant="h6">Code Life</Typography>
          <ul className={styles.navmenu}>
            <li>首页</li>
            <li>博客列表</li>
            <li>博客分类</li>
            <li>其他作品</li>
            <li>关于作者</li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
