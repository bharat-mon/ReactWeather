import React, {Component} from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';

class Weather extends React.Component {
  render() {
    return(
      <div>
        <h1>Get Weather</h1>
        <WeatherForm />
        <WeatherMessage />
      </div>
    );
  }
}

module.exports = Weather;
