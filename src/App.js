import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./App.css";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Switch>
      <ThemeProvider theme={theme}>
        <Route exact path="/PortfolioWebsite" component={Home} />
        <Route exact path="/Resume" component={Resume} />
        <Route exact path="/Projects" component={Projects} />
        {/* <Route exact path="/Contact" component={Contact} /> */}
        </ThemeProvider>
      </Switch>
    </React.Fragment>
  );
}

export default App;
