import React, { Component } from 'react';
import '../App.css';

class History extends Component {

  //Loop thrugh the cashed searchresults and return dom elements
  createList = () => {
    let items = this.props.historyEntries.map((value, index) => {
      return <li className="list-group-item" key={index}><a onClick={this.props.historyClick.bind(this, index)} href="#0">{value.name}</a></li>
    })
    return items;
  }

  render() {
    return (
      <div >
        <h5 >History</h5>
        <ul className="list-group list-group-flush">
          {this.createList()}
        </ul>
      </div>
    );
  }
}

export default History;