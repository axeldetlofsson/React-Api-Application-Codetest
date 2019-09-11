import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import CityInformation from './components/CityInformation.js';
import { Row, Col, Container } from 'react-bootstrap'
import WeatherInformation from './components/WeatherMap.js';

class App extends Component {
  state = {
    searchString: []
  }
  render() {
    return (
      <div>
        <Container >
          <Row className="justify-content-md-center">
            <Col md="auto" className="text-center">
              <Search />
              <CityInformation />
              <WeatherInformation />
            </Col >
          </Row>
        </Container >
      </div>
    );
  }
}

export default App;