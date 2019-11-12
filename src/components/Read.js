import React from 'react'
import Button from './Button'
import Icon from './Icon'

const Read = ({ letter, respond, clearDesk, isWrite }) => {
  return (
    <div className='eight wide centered column'>
      <div className='ui fluid card'>
        <div className='content'>
          <p>{letter.content}</p>
          <span className='right floated icon'>
            <Icon icon={letter.icon} />
          </span>
        </div>
      </div>
      {isWrite ? null : (
        <>
          <Button onClick={respond} className='ui right floated button'>
            Respond to Letter
          </Button>
          <Button onClick={clearDesk} className='ui right floated button'>
            Close
          </Button>
        </>
      )}
    </div>
  )
}

export default Read
