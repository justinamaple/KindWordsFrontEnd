import React, { Component } from 'react'
import Button from './Button'

class NavBar extends Component {

  render () {

    const { handleWriteClick, handleJournalClick } = this.props

    return (
      <nav>
        <Button onClick={handleWriteClick} className='ui button'>Write Letter</Button>
        <Button onClick={handleJournalClick} className='ui button'>Read Journal</Button>
      </nav>
    )
    
  }
}

export default NavBar
