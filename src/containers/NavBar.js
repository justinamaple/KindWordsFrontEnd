import React from 'react'
import NavItem from '../components/NavItem'

const NavBar = ({ setDesk, handleSignOut }) => {
  const navClasses = 'ui button'
  return (
    <div className='ui three item menu'>
      <NavItem
        onClick={() => setDesk(true)}
        className={navClasses}
        text={'Write'}
      />
      <NavItem
        onClick={() => setDesk(false, false, true)}
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
