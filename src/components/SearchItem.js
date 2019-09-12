import React, { Component } from 'react'
import MapWrapper from './Map'
import Weather from './Weather'
import { Row, Card } from "react-bootstrap";
class SearchItem extends Component {
    render() {
        return (
            <div>
                <Row md="12">
                    <Card className="text-center mb-3">
                        <Card.Body>
                            <Card.Title>{this.props.searchItem.name}</Card.Title>
                            <Card.Text>{this.props.searchItem.information}</Card.Text>
                            <Weather weather={this.props.searchItem.weather} />
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <MapWrapper center={{ lat: this.props.searchItem.coordinates.lat, lng: this.props.searchItem.coordinates.lon }} />
                </Row>
            </div>
        );
    }
}

export default SearchItem;