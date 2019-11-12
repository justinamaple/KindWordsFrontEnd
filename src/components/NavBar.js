import React from 'react'
import Button from './Button'

const NavBar = ({ setDesk, handleSignOut }) => {
  return (
    <div className='ui two item menu'>
      <div className='item'>
        <Button onClick={() => setDesk(true)} className='ui button'>
          Write Letter
        </Button>
      </div>
      <div className='item'>
        <Button
          onClick={() => setDesk(false, false, true)}
          className='ui button'
        >
          Read Journal
        </Button>
        <Button onClick={handleSignOut} className='ui button'>
          Sign Out
        </Button>
      </div>
    </div>
  )
}

export default NavBar
