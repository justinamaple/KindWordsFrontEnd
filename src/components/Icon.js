import React from 'react'

const Icon = ({ icon }) => {
  return (
    <div>
      <span className='signature' role='img'>
        <h1 className='initial'>- {icon}</h1>
      </span>
    </div>
  )
}

export default Icon
