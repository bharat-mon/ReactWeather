import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

class Nav extends React.Component {
  onSearch = (event) => {
    event.preventDefault();
    let location = this.location.value;
    let encodedLocation = encodeURIComponent(location);
    if (location.length > 0) {
      this.location.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  };

  render() {
    return(
      <div className="top-bar">
        <div className="top-bar-title">
          <strong>React Weather App</strong>
        </div>
        <div className="top-bar-left">
          <ul className="menu">
            <li><NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink></li>
            <li><NavLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink></li>
            <li><NavLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input ref={(ref) => this.location = ref} type="search" placeholder="Enter city name" /></li>
              <li><button type="button" className="button">Get Weather</button></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

module.exports = Nav;
