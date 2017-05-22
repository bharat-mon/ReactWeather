import React, {Component} from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

class Weather extends React.Component {
  constructor(props){   {/* We need to define initialState in a constructor when using ES6 */}
    super(props);
    this.state = {
      location: 'Hyderabad',
      temp: 40
    };
  }

  handleSearch = (location) => {
    const that = this;
    openWeatherMap.getTemp(location).then((temp) => {
      that.setState({
        location: location,
        temp: temp
      });
    }, (errorMessage) => {
      alert(errorMessage);
    });
  };

  render() {
    return(
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        <WeatherMessage location={this.state.location} temp={this.state.temp} />
      </div>
    );
  }
}

module.exports = Weather;
