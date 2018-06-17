import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import './Wrapper.css';

class Wrapper extends Component {
  render() {
    return (
      <HashRouter>
        <div id="wrapper-div">
          <div className="header">
            
              <h1 id="title">GeoJournal</h1>

            
            <div id="search">
              <ul className='nav'>
                <li className="nav-item"><NavLink exact to="/">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/about">About</NavLink></li>
              </ul>
              <div id="search-bar-div">
                <div>
                  <input id="search-bar" type='text' /><i className="fas fa-search"></i><br /></div>
                <p id="search-tag">Search by date, location, or keyword</p>
              </div>
            </div>
          </div>

          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Wrapper;
