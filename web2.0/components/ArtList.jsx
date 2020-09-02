import React from "react";
  import { createMuiTheme } from "@material-ui/core";
  import { ThemeProvider } from "@material-ui/styles";
  import createOverrides from './theme';
import CardList from "./CardList";
  
  const baseTheme = createMuiTheme();
  
  const ArtList = (props) => (
    // Normally, you need just one <ThemeProvider /> at root component
    <ThemeProvider
      theme={{
        ...baseTheme,
        overrides: createOverrides(baseTheme)
      }}
    >
      <CardList article={props.article} category={props.category} />
    </ThemeProvider>
  )
  
  export default ArtList
