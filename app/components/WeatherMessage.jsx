import React, { Component } from 'react';

class WeatherMessage extends React.Component {
  render() {
    return(
      <p>It is {this.props.temp} C in {this.props.location}</p>
    );
  }
}

module.exports = WeatherMessage;
