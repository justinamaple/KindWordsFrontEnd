import React from 'react'
import Button from './Button'
import Icon from './Icon'

const Read = ({ letter, setDesk, isWrite }) => {
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
          <Button
            onClick={() => setDesk(true, true, false)}
            className='ui right floated button'
          >
            Respond to Letter
          </Button>
          <Button onClick={() => setDesk()} className='ui right floated button'>
            Close
          </Button>
        </>
      )}
    </div>
  )
}

export default Read
