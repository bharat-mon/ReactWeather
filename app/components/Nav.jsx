import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return(
      <div>
        <h1>Navigation Component</h1>
        <NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink>
        <NavLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink>
        <NavLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
      </div>
    );
  }
}

module.exports = Nav;
