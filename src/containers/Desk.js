import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Plane from '../components/Plane'
import Read from '../components/Read'
import Write from '../components/Write'
import Icon from '../components/Icon'
import Journal from '../components/Journal'
import CreateResponse from '../components/CreateResponse'

const LETTERS_URL = 'http://localhost:3000/letters'

class Desk extends Component {
  state = {
    letterStack: [],
    isWrite: false,
    isRead: false,
    isJournal: false,
    plane: null
  }

  componentDidMount() {
    // Fetch the letters and setState using PrevState to update
    this.fetchLetters();
  }

  fetchLetters = () => {
    // Call this function on an interval to get more letters
    // Ideally grab 10-20 at a time? Do it every 30 seconds?

    fetch(LETTERS_URL)
      .then(resp => resp.json())
      .then(json => {
        this.setState({ 
          letterStack: json,
          plane: json[Math.round(Math.random() * 10)] //this is just for testing!
        })
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
        <Write accountId={this.props.accountId} handleCloseClick={this.handleCloseClick} isRead={this.state.isRead} />
        <Icon />
      </>
    )
  }

  handlePlaneClick = (e, letter) => {
    e.persist()
    this.setState({
      isRead: true
    })
    this.incrementLetterViews(letter)
  }

  incrementLetterViews = (letter) => {
    fetch(LETTERS_URL + `/${letter.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        num_views: letter.num_views + 1 
      })
    })
  }

  renderRead = (letter) => {
    return (
      <>
        <Read letter={letter} handleWriteClick={this.handleWriteClick} isWrite={this.state.isWrite}/>
      </>
    )
  }

  renderCreateResponse = (letter) => {
    return (
      <>
        <CreateResponse accountId={this.props.accountId} letter={letter} isRead={this.state.isRead} isWrite={this.state.isWrite} handleCloseClick={this.handleCloseClick}/>
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
      </>
    )
  }

  handleCloseClick = () => {
    this.setState({
      isWrite: false,
      isRead: false,
      isJournal: false,
      plane: this.state.letterStack[Math.round(Math.random() * 10)]
    })
  }

  isHomeScreen = () => {
    const { isWrite, isRead, isJournal } = this.state
    return !isWrite && !isRead && !isJournal
  }


  render() {
  
    const { plane, isWrite, isRead, isJournal } = this.state

    return (
      <>
        <NavBar isWrite={isWrite} isRead={isRead} isJournal={isJournal} handleWriteClick={this.handleWriteClick} handleJournalClick={this.handleJournalClick} handleCloseClick={this.handleCloseClick} /> 
        { isWrite && !isRead ? this.renderWrite() : null }
        { isRead && !isWrite ? this.renderRead(plane) : null }
        { isWrite && isRead ? this.renderCreateResponse(plane) : null }
        { isJournal ? this.renderJournal() : null }
        { plane && this.isHomeScreen() ? <Plane handlePlaneClick={this.handlePlaneClick} plane={plane}/> : null } 
      </>
    )
  }

}

export default Desk
