import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";

import "./App.scss";
import Header from "./components/Header";

import Projects from "./pages/Projects/Projects.component";
import Blog from "./pages/Blog/Blog.component";
import Contact from "./pages/Contact/Contact.component";
import Home from "./pages/Homepage/homepage.component";
import Skills from "./pages/Skills/skills.component";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/skills" component={Skills} />
            </Switch>
          </div>
        </Router>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
