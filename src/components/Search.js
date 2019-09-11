import React, { Component } from 'react';
import { Button, Form, FormControl, FormLabel, FormGroup } from 'react-bootstrap';
import '../App.css';
import SearchItem from './SearchItem'
import { thisExpression } from '@babel/types';


class Search extends Component {

  state = {
    searchString: '',
    searchResult: {}
  }

  changeState = (e) => {
    this.setState({
      searchString: e.target.value
    })
  }

  findCity = (e) => {
    this.setState({
      searchResult: {
        name: 'Stockholm',
        information: 'Stockholm is a city bllabla...'
      }
    })
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <FormLabel>Enter The Name Of The City</FormLabel>
            <FormControl onChange={this.changeState} type="text"></FormControl>
          </FormGroup>
          <Button onClick={this.findCity}>Submit</Button>
        </Form>
        <SearchItem searchItem={this.state.searchResult} />
      </div>
    );
  }
}


export default Search;