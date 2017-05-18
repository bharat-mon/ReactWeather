import React, {Component} from 'react';
import WeatherForm from 'WeatherForm';

class Weather extends React.Component {
  render() {
    return(
      <div>
        <h1>Get Weather</h1>
        <WeatherForm />
      </div>
    );
  }
}

module.exports = Weather;
