import React, { Component } from 'react'
import MapWrapper from './Map'
class SearchItem extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.searchItem.name}</h1>
                <p>{this.props.searchItem.information}</p>
                <h1>{this.props.searchItem.weather}</h1>
              <MapWrapper center={{lat: this.props.searchItem.coordinates.lat, lng: this.props.searchItem.coordinates.lon}}/>
            </div>
        );
    }
}


export default SearchItem;