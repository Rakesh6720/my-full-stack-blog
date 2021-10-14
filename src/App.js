import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ArticlesList from "./ArticlesList";
import ArticlesPage from "./ArticlesPage";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>

    <div className="App">
      <NavBar/>
      <div id="page-body">
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/articles-list" component={ArticlesList} />
        <Route path="/article/:name" component={ArticlesPage} />
      </div>
    </div>
    </Router>
  );
}

export default App;
