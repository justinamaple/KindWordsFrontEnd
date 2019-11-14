import React from 'react'
import NavItem from '../components/NavItem'
import MusicPlayer from '../components/MusicPlayer'
import { NavLink } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'
import KalimbaIcon from '../assets/images/kalimba-icon.png'

const NavBar = ({ setDesk, handleSignOut }) => {
  const navClasses = 'ui button primary'

  return (
    <Menu inverted>
      <div className='item fill'>
        <img className='img' src={KalimbaIcon} alt='kalimba icon' />
      </div>
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
      <div className='item'>
        <MusicPlayer />
      </div>
      <div className='menu right'>
        <div className='item'>
          <NavLink to='/login' onClick={handleSignOut} className={navClasses}>
            {'Sign Out'}
          </NavLink>
        </div>
      </div>
    </Menu>
  )
}

export default NavBar
