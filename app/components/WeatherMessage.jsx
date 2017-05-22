import React, { Component } from 'react';

const WeatherMessage = (props) => {
    return(
      <p>It is {props.temp} C in {props.location}</p>
    );
};

module.exports = WeatherMessage;
