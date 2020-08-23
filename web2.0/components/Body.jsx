import React from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Nav from "./Nav/Nav";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import MNav from "./Nav/MNav";

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

function Body() {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Grid container spacing={3}>
          <Hidden smUp>
            <MNav />
          </Hidden>
          <Hidden xsDown>
            <Nav />
          </Hidden>
        </Grid>
      </div>
      </MuiThemeProvider>
  );
}

export default Body;
