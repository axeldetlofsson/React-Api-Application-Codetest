import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapWrapper extends Component {
  render() {
    const style = {
      width: "100%",
      height: "50vh"
    };

    console.log(this.props);
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

export default GoogleApiWrapper({
  apiKey: "AIzaSyBhaAer4l5c_ND3QaePbb8lTTRNn4aEvQs"
})(MapWrapper);
