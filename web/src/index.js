import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Nav from "./component/nav/Nav";
import Category from "./pages/category/Category";
import ArticleList from "./pages/article/ArticleList";
import Article from "./pages/article/Article";
import { Provider } from "react-redux";
import store from "./store/store";
import { setCurrentUser } from "./store/actions/authActions";
import CategoryList from "./pages/category/CategoryList";

if (localStorage.usertoken) {
  store.dispatch(setCurrentUser(localStorage.usertoken));
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/404" component={PageNotFound} />
      <Nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/category" exact component={Category} />
          <Route path="/category/:id" component={CategoryList} />
          <Route path="/article" exact component={ArticleList} />
          <Route path="/article/:id" component={Article} />
          <Redirect to="/404" />
        </Switch>
      </Nav>
    </Router>
  </Provider>,
  document.getElementById("root")
);
