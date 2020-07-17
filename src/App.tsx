import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import MainMenu from "./components/MainMenu/MainMenu";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

import Associates from "./components/Associates/Associates";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[700]
    }
  }
});
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainMenu />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/associates" component={Associates} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;