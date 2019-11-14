import React from 'react'
import NavItem from '../components/NavItem'
import MusicPlayer from '../components/MusicPlayer'
import { NavLink } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

const NavBar = ({ setDesk, handleSignOut }) => {
  const navClasses = 'ui button primary'

  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
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
    </Segment>
  )
}

export default NavBar
