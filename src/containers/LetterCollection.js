import React from 'react'
import Button from '../components/Button'
import Read from '../components/Read'

const LetterCollection = ({ letter, forward, back }) => {
  return (
    <>
      <div className='card row'>
        <div className='content'>
          <Read letter={letter} isWrite={true} />
        </div>
      </div>

      <div className='card row'>
        <div className='content'>
          <Button onClick={forward} className='ui button primary right floated'>
            <i className='right arrow icon'></i>
          </Button>
          <Button onClick={back} className='ui button secondary right floated'>
            <i className='left arrow icon'></i>
          </Button>
        </div>
      </div>
    </>
  )
}

export default LetterCollection
