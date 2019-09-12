import React, { Component } from "react";
import { Row, Button, FormControl, Col } from "react-bootstrap";
import "../App.css";
import SearchItem from "./SearchItem";
import History from "./History";

class Search extends Component {
  state = {
    searchString: "",
    searchResult: {
      name: "",
      information: "",
      coordinates: { lat: 59.32944444, lon: 18.06861111 }
    },
    cache: []
  };

  changeState = e => {
    this.setState({
      searchString: e.target.value
    });
  };

  historyClick = index => {
    this.setState({
      searchResult: this.state.cache[index]
    });
  };

  findCity = async e => {
    if (this.state.searchString) {
      let searchResult = this.state.cache.find(
        city => city.name === this.state.searchString
      );
      if (!searchResult)
        searchResult = await GetCityInformation(this.state.searchString);
      this.setState({
        searchResult: searchResult,
        cache: UpdateCache(this.state.cache, searchResult)
      });
    }
  };

  render() {
    return (
      <div>
        <h3>Enter The Name Of The City</h3>
        <Row>
          <Col md="8">
            <FormControl onChange={this.changeState} type="text"></FormControl>
          </Col>
          <Col md="4">
            <Button onClick={this.findCity}>Submit</Button>
          </Col>
        </Row>
        <History
          historyClick={this.historyClick}
          historyEntries={this.state.cache}
        />
        <SearchItem searchItem={this.state.searchResult} />
      </div>
    );
  }
}

function UpdateCache(cache, searchResult) {
  cache.unshift(searchResult);
  if (cache.length > 5) cache.pop();
  return cache;
}

async function GetCityInformation(name) {
  console.log('api')
  let result = await fetch(
    "https://sv.wikipedia.org/api/rest_v1/page/summary/" +
      name +
      "?redirect=false"
  ).then(res => res.json());

  let returnObj = {
    information: result.extract,
    coordinates: result.coordinates,
    name: result.displaytitle
  };

  return returnObj;
}

export default Search;
