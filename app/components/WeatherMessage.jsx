import React, { Component } from 'react';

const WeatherMessage = (props) => {
    return(
      <h3 className="text-center">It is {props.temp} C in {props.location}</h3>
    );
};

module.exports = WeatherMessage;
