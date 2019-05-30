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
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 menu">
              <ul className="list-group">
                <li className="list-group-item"><NavLink to="/">Home</NavLink></li>
                <li className="list-group-item"><NavLink to="/people">People</NavLink></li>
                <li className="list-group-item"><NavLink to="/about">About</NavLink></li>
              </ul>
            </div>

            <div className="col-10 content">
              <Route exact path="/" component={Home} />
              <Route path="/people" component={People} />
              <Route path="/about" component={About} />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
