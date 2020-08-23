import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import styles from "./Nav.module.scss";

function MNav() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar className={styles.navbox}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Code Life</Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default MNav
