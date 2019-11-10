import React, { Component } from 'react'

class Plane extends Component {
  render () {
    return (
      <button className='plane' onClick={this.props.handleClick}><span role='img'> ✈️ </span></button>
    )
  }
}

export default Plane
