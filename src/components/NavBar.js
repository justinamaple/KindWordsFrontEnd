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
      handleCloseClick
    } = this.props

    return isWrite || isRead || isJournal ? (
      <nav>
        <Button onClick={handleCloseClick} className="ui button">
          Close
        </Button>
      </nav>
    ) : (
      <nav>
        <Button onClick={handleWriteClick} className="ui button">
          Write Letter
        </Button>
        <Button onClick={handleJournalClick} className="ui button">
          Read Journal
        </Button>
      </nav>
    )
  }
}

export default NavBar
