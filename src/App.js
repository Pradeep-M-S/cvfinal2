import React from "react";
import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Projects() {
  return (
    <div>
      <p>1. Portfolio using React</p>
      <p>2. E-Commerce Site</p>
      <p>3. Music Player Landing Page</p>
    </div>
  );
}

function Blog() {
  return (
    <p>
      This page is still under maintanence.
      <br />
      ERROR 404
    </p>
  );
}

function Contact() {
  return (
    <div>
      {" "}
      <p>Feel free to reach us.</p> <p>+91-8610704207</p>{" "}
      <p>pradeepmsblogspot@gmail.com.</p>
    </div>
  );
}

function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <h5>
          I am a <b>Web Developer</b>,working on building my skills in a daily
          basis as it's a vast and growing field.I myself develop Web Apps using
          React and also develop Mobile Apps using React-Native framework.
        </h5>
      </div>
    </div>
  );
}
export default App;
