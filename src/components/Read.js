import React from 'react'
import Button from './Button'
import Icon from './Icon'

const Read = ({ letter, setDesk, isWrite }) => {
  if (!letter) {
    letter = {
      content: 'I love you, you got this! <3',
      icon: 'J'
    }
  }

  return (
    <div className='six wide centered column'>
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
            className='ui right floated button primary'
          >
            Respond to Letter
          </Button>
          <Button
            onClick={() => setDesk()}
            className='ui right floated button secondary'
          >
            Close
          </Button>
        </>
      )}
    </div>
  )
}

export default Read
