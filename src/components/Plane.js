import React from 'react'

const Plane = ({ handleClick, plane }) => {
  return (
    <button className='plane' onClick={() => handleClick(plane)}><span role='img'> ✈️</span> {plane.content} </button>
  )
}

export default Plane
