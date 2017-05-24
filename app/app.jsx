import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter as Router, Route, HashRouter, Link} from 'react-router-dom' ;

import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
jQuery(document).ready(function($) {
$(document).foundation();
});

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={Main} />
      <Route exact path="/" component={Weather} />
      <Route path="/about" component={About} />
      <Route path="/examples" component={Examples} />
    </div>
  </Router>,
  document.getElementById("app")
);
