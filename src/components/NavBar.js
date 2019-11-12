import React from 'react'
import Button from './Button'

const NavBar = ({ handleWriteClick, handleJournalClick }) => {
  return (
    <div className='ui two item menu'>
      <div className='item'>
        <Button onClick={handleWriteClick} className='ui button'>
          Write Letter
        </Button>
      </div>
      <div className='item'>
        <Button onClick={handleJournalClick} className='ui button'>
          Read Journal
        </Button>
      </div>
    </div>
  )
}

export default NavBar
