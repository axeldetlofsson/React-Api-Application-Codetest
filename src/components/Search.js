import React, { Component } from "react";
import { Row, Button, FormControl, Col } from "react-bootstrap";
import SearchItem from "./SearchItem";
import History from "./History";
import { config } from '../config'
import "../App.css";

class Search extends Component {
  state = {
    searchString: "Stockholm",
    searchResult: {
      name: "",
      information: "",
      coordinates: { lat: 59.32944444, lon: 18.06861111 },
      weather: { temp: '', descr: '' }
    },
    cache: []
  };
  constructor() {
    super()
    this.findCity();
  }

  //Set searchstring to searchfield value
  changeState = e => {
    this.setState({
      searchString: e.target.value
    });
  };

  //Set searchResult to clicked index of historylist
  historyClick = index => {
    this.setState({
      searchResult: this.state.cache[index]
    });
  };

  findCity = async e => {
    //Check thate serchstring not is empty
    if (this.state.searchString) {
      //Check if search exist in cache
      let searchResult = this.state.cache.find(
        city => city.name === this.state.searchString
      );
      if (!searchResult)
        //Get information from api's
        searchResult = await GetAllInformation(this.state.searchString);
      //Check if city is found
      if (searchResult)
        this.setState({
          searchResult: searchResult,
          cache: UpdateCache(this.state.cache, searchResult)
        });
    }
  };

  render() {
    return (
      <div>
        <Row >
          <Col>
            <h2 className="m-4">Enter The Name Of The City</h2>
            <Row className="mb-2 mt-2" >
              <Col md="10" >
                <FormControl className="mb-2" onChange={this.changeState} type="text"></FormControl>
              </Col>
              <Col md="2" >
                <Button onClick={this.findCity}>Search</Button>
              </Col>
            </Row>
            <Col>
              <SearchItem searchItem={this.state.searchResult} />
            </Col>
          </Col>
          <Col md="2" className="ml-5 mt-5">
            <History
              historyClick={this.historyClick}
              historyEntries={this.state.cache}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

//Add new item to cache and remove the oldest
function UpdateCache(cache, searchResult) {
  cache.unshift(searchResult);
  if (cache.length > 5) cache.pop();
  return cache;
}

//Combine weather and cityinformation object
async function GetAllInformation(name) {
  let returnObj = await GetCityInformation(name)
  //Check that city is found
  if (returnObj.title === 'Not found.') {
    alert('City not found')
    return;
  }
  returnObj.weather = await GetWeatherInformaiton(returnObj.coordinates)
  return returnObj;
}

async function GetCityInformation(name) {
  let result = await fetch(
    "https://sv.wikipedia.org/api/rest_v1/page/summary/" +
    name +
    "?redirect=false"
  ).then(res => res.json());
  //Extract the wanted information from result
  let returnObj = {
    information: result.extract,
    coordinates: result.coordinates,
    name: result.displaytitle,
    title: result.title
  };

  return returnObj;
}

async function GetWeatherInformaiton(coords) {
  let result = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=" + coords.lat + "&lon=" + coords.lon + "&APPID=" + config.weatherApiKey
  ).then(res => res.json());

  //Extract and convert temp to Celcius
  let returnObj = {
    temp: 'Temp: ' + Math.round((result.main.temp - 273.15) * 1 * 100) / 100 + " °C",
    descr: 'Skies: ' + result.weather[0].description
  };

  return returnObj;
}

export default Search;
