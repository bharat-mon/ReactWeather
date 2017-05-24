import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Examples = (props) => {
  return (
    <div className="row">
      <div className="medium-6 large-4 small-centered columns">
        <h1 className="text-center">Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
          <li><Link to="/?location=Hyderabad">Hyderabad, IN</Link></li>
          <li><Link to="/?location=Dubai">Dubai, UAE</Link></li>
        </ol>
      </div>
    </div>
  );
};

module.exports = Examples;
