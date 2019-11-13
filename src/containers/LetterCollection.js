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
        <Button onClick={back} className='ui button left floated'>
          <i className='left arrow icon'></i>
        </Button>
        <Button onClick={forward} className='ui button right floated'>
          <i className='right arrow icon'></i>
        </Button>
      </div>
    </>
  )
}

export default LetterCollection
