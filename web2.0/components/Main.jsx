import React,{useState} from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import CategoryIcon from '@material-ui/icons/Category';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import TimerIcon from '@material-ui/icons/Timer';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PersonIcon from '@material-ui/icons/Person';
import {useRouter} from 'next/router'
import Head from "next/head";
import { Dialog, DialogTitle, DialogContent, TextField } from "@material-ui/core";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
}));

function Main(props) {
  const classes = useStyles();
  const { window } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authOpen,setAuthOpen] = useState(false)
  const router = useRouter()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenAuth = ()=>{
    setAuthOpen(true)
  }

  const handleCloseAuth = ()=>{
    setAuthOpen(false)
  }

  const submitVal= (val)=>{
    console.log(val);
  }

  const drawer = (
    <div>
      <Head>
        <title>Code Life</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <div className={classes.toolbar} />
      <Divider />
      <List>
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
        <ListItem button onClick={()=>router.push('/')}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="首页" />
        </ListItem>
        <ListItem button onClick={()=>router.push('/category')}>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="分类" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TimerIcon />
          </ListItemIcon>
          <ListItemText primary="归档" onClick={()=>router.push('/time')} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleAltIcon />
          </ListItemIcon>
          <ListItemText primary="友链" onClick={()=>router.push('/friendlink')} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="作者" onClick={()=>router.push('/about')} />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Code Life
          </Typography>
          <Button color="inherit" onClick={handleOpenAuth}>Login</Button>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>

      <Dialog open={authOpen} onClose={handleCloseAuth}>
        <DialogTitle>登录</DialogTitle>
        <DialogContent>
          <form>
            <TextField id="username" label="姓名" name="username" margin="dense" fullWidth></TextField>
            <TextField id="password" type="password" label="密码" password="password" margin="dense" fullWidth></TextField>
            <Button type="button" onClick={submitVal}>提交</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

Main.propTypes = {
  window: PropTypes.func,
};

export default Main;
