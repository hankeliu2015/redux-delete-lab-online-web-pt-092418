import React, { Component } from 'react';

class Band extends Component {

  render() {
    const bandList = this.props.bands.map((band, index) => <li key={index}> {band.name}</li> )
    // debugger
    return(
      <div>
        <h4>Band List: </h4>
         {bandList}
      </div>
    );
  }
};

export default Band;
