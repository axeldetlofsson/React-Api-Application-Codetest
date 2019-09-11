import React, { Component } from 'react'

class SearchItem extends Component {
    render() {
        console.log(this.props.searchItem.name)
        return (
            <div>
                <h1>{this.props.searchItem.name}</h1>
                <h1>{this.props.searchItem.information}</h1>
            </div>
        );
    }
}


export default SearchItem;