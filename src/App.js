import React, { Component } from 'react';
import Search from './components/Search';
import './App.css';
import { Col, Container } from 'react-bootstrap'

class App extends Component {
  state = {
    searchString: []
  }
  render() {
    return (
      <Container >
        <div className="justify-content-md-center">
          <Col md="auto" className="text-center">
            <Search />
          </Col >
        </div>
      </Container >
    );
  }
}

export default App;