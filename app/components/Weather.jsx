import React, {Component} from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

class Weather extends React.Component {
  state = {
      isLoading: false
    }

  handleSearch = (location) => {
    const that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then((temp) => {
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, (error) => {
      that.setState({
        isLoading: false,
        errorMessage: error.message
      });
    });
  };

  render() {
    const renderMessage = () => {
      if(this.state.isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>
      } else if(this.state.temp && this.state.location) {
        return <WeatherMessage location={this.state.location} temp={this.state.temp} />;
      }
    };

    const renderError = () => {
      if (typeof this.state.errorMessage === 'string') {
        return (
          <ErrorModal message={this.state.errorMessage} />
        );
      }
    };

    return(
      <div className="row">
        <div className="medium-6 large-4 small-centered columns text-center">
          <h1 className="page-title">Get Weather</h1>
          <WeatherForm onSearch={this.handleSearch} />
          {renderMessage()}
          {renderError()}
        </div>
      </div>
    );
  }
}

module.exports = Weather;
