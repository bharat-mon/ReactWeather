import React, {Component} from 'react';

class WeatherForm extends React.Component {
  onFormSubmit = (event) => {
    event.preventDefault();
    const location = this.location.value;
    if (location.length > 0) {
      this.location.value = '';
      this.props.onSearch(location);
    }
  };

  render() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref={(ref) => this.location = ref} placeholder="Enter city name" />
            {/* React has no autobinding in ES6 classes, so we should define a function for ref for it to work and use this.location.value instead of this.refs.location.value */}
          </div>
          <div>
            <button className="button expanded hollow">Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
};

module.exports = WeatherForm;
