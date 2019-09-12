import React, { Component } from 'react';
import '../App.css';

class History extends Component {

    createList = () =>
    {
        let items = this.props.historyEntries.map((value, index) => {
            return <li key={index}><a onClick={this.props.historyClick.bind(this, index)} href="#">{value.name}</a></li>
        })
        return items;
    }
      
  render() {
    return (
      <ul>
          {this.createList()}
      </ul>
    );
  }
}

export default History;