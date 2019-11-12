import React from 'react'
import NavItem from './NavItem'

const NavBar = ({ handleWriteClick, handleJournalClick, handleSignOut }) => {
  const navClasses = 'ui button'
  return (
    <div className='ui three item menu'>
      <NavItem
        onClick={handleWriteClick}
        className={navClasses}
        text={'Write'}
      />
      <NavItem
        onClick={handleJournalClick}
        className={navClasses}
        text={'Journal'}
      />
      <NavItem
        onClick={handleSignOut}
        className={navClasses}
        text={'Sign Out'}
      />
    </div>
  )
}

export default NavBar
