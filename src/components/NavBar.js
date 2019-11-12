import React from 'react'
import NavItem from './NavItem'

const NavBar = ({ handleWriteClick, handleJournalClick, handleSignOut }) => {
  const navClasses = 'ui button'
  return (
    <div className='ui three item menu'>
      <NavItem
        onClick={handleWriteClick}
        className={navClasses}
        test={'Write'}
      />
      <NavItem
        onClick={handleJournalClick}
        className={navClasses}
        test={'Journal'}
      />
      <NavItem
        onClick={handleSignOut}
        className={navClasses}
        test={'Sign Out'}
      />
    </div>
  )
}

export default NavBar
