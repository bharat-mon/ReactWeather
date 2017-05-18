import React, {Component} from 'react';

class WeatherForm extends React.Component {
  render() {
    return(
      <div>
        <form>
          <div>
            <input type="text" ref="weatherForm" placeholder="Enter city name"></input>
          </div>
          <div>
            <button>Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
};

module.exports = WeatherForm;
