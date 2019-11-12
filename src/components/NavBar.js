import React, { Component } from 'react'
import Button from './Button'

class NavBar extends Component {
  render() {
    const {
      isWrite,
      isRead,
      isJournal,
      handleWriteClick,
      handleJournalClick,
      handleCloseClick,
      handleSignOut
    } = this.props

    return isWrite || isRead || isJournal ? (
      <nav>
        <Button onClick={handleCloseClick} className='ui button'>
          Close
        </Button>
      </nav>
    ) : (
      <nav>
        <Button onClick={handleWriteClick} className='ui button'>
          Write Letter
        </Button>
        <Button onClick={handleJournalClick} className='ui button'>
          Read Journal
        </Button>
        <Button onClick={handleSignOut} className='ui button'>
          Sign Out
        </Button>
      </nav>
    )
  }
}

export default NavBar
