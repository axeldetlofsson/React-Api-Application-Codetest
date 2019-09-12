import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { config } from '../config'

export class MapWrapper extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={style}
        initialCenter={this.props.center}
        center={this.props.center}
      >
        <Marker position={this.props.center} />
      </Map>
    );
  }
}

const style = {
  width: "100%",
  height: "50vh"
};

export default GoogleApiWrapper({
  apiKey: config.googleApiKey
})(MapWrapper);
