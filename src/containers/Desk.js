import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Plane from '../components/Plane'
import Read from '../components/Read'
import Write from '../components/Write'
import Button from '../components/Button'
import Icon from '../components/Icon'
import Journal from '../components/Journal'

//props - accountId

class Desk extends Component {
  state = {
    letterStack: [],
    isWrite: false,
    isRead: false,
    isJournal: false
  }

  componentDidMount() {
    // Fetch the letters and setState using PrevState to update
    this.fetchLetters();
  }

  fetchLetters = () => {
    // Call this function on an interval to get more letters
    // Ideally grab 10-20 at a time? Do it every 30 seconds?
    const LETTERS_URL = 'http://localhost:3000/letters'

    fetch(LETTERS_URL)
      .then(resp => resp.json())
      .then(json => {
        this.setState({ letterStack: json })
      })
  }

  handleWriteClick = () => {
    this.setState({
      isWrite: true
    })
  }

  renderWrite = () => {
    return (
      <>
        <Write accountId={this.props.accountId} handleCloseClick={this.handleCloseClick} />
        <Icon />
        <Button onClick={this.handleCloseClick} className='ui button'>Close</Button>
      </>
    )
  }

  handleJournalClick = () => {
    this.setState({
      isJournal: true
    })
  }

  renderJournal = () => {
    return (
      <>
        <Journal />
        <Button onClick={this.handleCloseClick} className='ui button'>Close</Button>
      </>
    )
  }

  handleCloseClick = () => {
    this.setState({
      isWrite: null,
      isRead: null,
      isJournal: null
    })
  }


  render() {

    const { letterStack, isWrite, isRead, isJournal } = this.state

    return (
      <>
        <NavBar handleWriteClick={this.handleWriteClick} handleJournalClick={this.handleJournalClick} /> 
        { isWrite ? this.renderWrite() : null }
        { isRead ? this.renderRead() : null }
        { isJournal ? this.renderJournal() : null }
      </>
    )
  }

}

export default Desk
