import React, {Component} from 'react';

const About = (props) => {
  return (
    <div className="row">
      <div className="medium-6 large-4 small-centered columns text-center">
        <h1 className="page-title">About</h1>
        <p>A Weather app made using React</p>
        <p>Tools used in this application:</p>
        <a href="https://facebook.github.io/react/" target="_blank">React - A JavaScript library for building user interfaces</a><br /><br />
        <a href="https://openweathermap.org" target="_blank">OpenWeatherMap - Сurrent weather and forecast</a>
      </div>
    </div>
  );
};

module.exports = About;
