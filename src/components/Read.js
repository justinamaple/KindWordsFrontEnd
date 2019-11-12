import React from 'react'
import Button from './Button'
import Icon from './Icon'

const Read = ({ letter, handleClick, isWrite }) => {
  return (
    <div className='ui centered card'>
      <div className='content'>
        <p>{letter.content}</p>
        <span className='right floated icon'>
          <Icon icon={letter.icon} />
        </span>
      </div>
      {isWrite ? null : (
        <Button onClick={handleClick} className='ui button'>
          Respond to Letter
        </Button>
      )}
    </div>
  )
}

export default Read
