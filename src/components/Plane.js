import React from 'react'
import Button from './Button'

const Plane = ({ handleClick, plane }) => {
  return (
    <Button className='ui button plane' onClick={e => handleClick(e, plane)}><span role='img'> ✈️</span> {plane.content} </Button>
  )
}

export default Plane
