import React, { Component } from 'react';
import Search from './components/Search';
import './App.css';
import { Row, Col, Container } from 'react-bootstrap'

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
            </Col >
          </Row>
        </Container >
      </div>
    );
  }
}

export default App;