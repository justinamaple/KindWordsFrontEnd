import React from 'react'
import Button from '../components/Button'
import Read from '../components/Read'

const LetterCollection = ({ letter, forward, back }) => {
  return (
    <>
      <div className='ui card'>
        <div className='content'>
          <Read letter={letter} isWrite={false} />
        </div>
      </div>
      <div>
        <Button onClick={back} className='ui button'>
          <i className='left arrow icon'></i>
        </Button>
        <Button onClick={forward} className='ui button'>
          <i className='right arrow icon'></i>
        </Button>
      </div>
    </>
  )
}

export default LetterCollection
