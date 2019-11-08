import React, { Component } from 'react'

class Plane extends Component {
  render () {
    return (
      <button className='plane' onClick={this.props.handleClick}>✈️ </button>
    )
  }
}

export default Plane
