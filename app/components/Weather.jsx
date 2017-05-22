import React, {Component} from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

class Weather extends React.Component {
  constructor(props){   {/* We need to define initialState in a constructor when using ES6 */}
    super(props);
    this.state = {
      isLoading: false
    };
  }

  handleSearch = (location) => {
    const that = this;
    this.setState({
      isLoading: true
    });
    openWeatherMap.getTemp(location).then((temp) => {
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, (errorMessage) => {
      that.setState({
        isLoading: false
      });
      alert(errorMessage);
    });
  };

  render() {
    const renderMessage = () => {
      if(this.state.isLoading) {
        return <h3>Fetching weather...</h3>
      } else if(this.state.temp && this.state.location) {
        return <WeatherMessage location={this.state.location} temp={this.state.temp} />;
      }
    };

    return(
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
}

module.exports = Weather;
