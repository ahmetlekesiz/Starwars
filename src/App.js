import React, { Component } from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import People from "./People";
import About from "./About";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Star Wars</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/people">People</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/people" component={People} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
