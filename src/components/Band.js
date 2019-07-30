import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <h4>Band List: </h4>
        {this.props.name}
      </div>
    );
  }
};

export default Band;
