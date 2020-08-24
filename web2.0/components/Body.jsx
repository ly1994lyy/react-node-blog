import React from "react";
import Grid from "@material-ui/core/Grid";
import Nav from "./Nav/Nav";
import { MuiThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function Body(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <Nav />
        {props.children}
      </div>
      </MuiThemeProvider>
  );
}

export default Body;
