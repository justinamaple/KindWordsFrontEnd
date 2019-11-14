import React from 'react'

const Icon = ({ icon }) => {
  return (
    <div>
      <span className='signature' role='img'>
        - {icon}
      </span>
    </div>
  )
}

export default Icon
