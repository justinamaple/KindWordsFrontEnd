import React, { Component } from 'react'
import Button from './Button'

class Plane extends Component {
  render () {

    const { handlePlaneClick, plane } = this.props

    return (
      <Button className='ui button' onClick={(e) => handlePlaneClick(e, plane)}><span role='img'> ✈️ </span></Button>
    )
  }
}

export default Plane
