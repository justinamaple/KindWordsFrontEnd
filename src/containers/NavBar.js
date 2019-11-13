import React from 'react'
import NavItem from '../components/NavItem'
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
        <div className='menu right'>
          <NavItem
            onClick={handleSignOut}
            className={`${navClasses} right`}
            text={'Sign Out'}
          />
        </div>
      </Menu>
    </Segment>
  )
}

export default NavBar
