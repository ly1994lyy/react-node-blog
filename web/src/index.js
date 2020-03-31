import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Nav from "./component/nav/Nav";

ReactDOM.render(
  <Router>
    <Route path="/404" component={PageNotFound} />
    <Nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Redirect to="/404" />
      </Switch>
    </Nav>
  </Router>,
  document.getElementById("root")
);
