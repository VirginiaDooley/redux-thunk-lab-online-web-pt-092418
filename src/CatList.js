import React, { Component } from 'react';

class CatList extends Component {
    render () {
      return (
      <div>
        {this.props.catPics.map(cat => <img src={cat.url} alt={cat.id}/>)}
      </div>
    )
  }
}

export default CatList;
