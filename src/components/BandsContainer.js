import React, { Component } from 'react'
import BandInput from './BandInput';

import { connect } from 'react-redux'
import Band from './Band'

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map((band, index) => <li key={band.id}> {index+1}. {band.name}<button onClick={() => this.props.delete({band.id})}>Delete</button></li> )

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <hr/>
        <Band bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name })

})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
