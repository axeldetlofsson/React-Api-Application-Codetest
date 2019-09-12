import React, { Component } from 'react';
import '../App.css';



class Weather extends Component {
  render() {
    return (
      <div>
        <h5>{this.props.weather.temp}</h5>
        <h5>{this.props.weather.descr}</h5>
      </div>
    );
  }
}

export default Weather;