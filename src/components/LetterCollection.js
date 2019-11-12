import React from 'react'
import Button from '../components/Button'
import Read from '../components/Read'

const LetterCollection = ({ letter, forward, back }) => {
  return (
    <div className='ui card'>
      <div className='content'>
        <Read letter={letter} isWrite={false} />
      </div>
      <div className='extra content'>
        <Button onClick={back} className='ui button'>
          {'<'}
        </Button>
        <Button onClick={forward} className='ui button'>
          {'>'}
        </Button>
      </div>
    </div>
  )
}

export default LetterCollection
