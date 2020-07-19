import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import MainMenu from "./components/MainMenu/MainMenu";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import {
  unstable_createMuiStrictModeTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

import Associates from "./components/Associates/Associates";
import { AuthProvider } from "./context/AuthContext";
import { LoginModalProvider } from "./context/LoginModalContext";
import AssociatesRoute from "./components/Associates/AssociatesRoute";
import { SelectedAssociateProvider } from "./context/SelectedAssociates";

const theme = unstable_createMuiStrictModeTheme({
  palette: {
    primary: {
      main: green[700],
    },
  },
});
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <LoginModalProvider>
            <MainMenu />
            <SelectedAssociateProvider>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <AssociatesRoute path="/associates">
                  <Associates />
                </AssociatesRoute>
              </Switch>
              <Footer />
            </SelectedAssociateProvider>
          </LoginModalProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
