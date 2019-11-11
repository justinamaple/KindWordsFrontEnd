import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Plane from '../components/Plane'
import Read from '../components/Read'
import Write from '../components/Write'
import Button from '../components/Button'
import Icon from '../components/Icon'
import Journal from '../components/Journal'

//props - accountId
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
        <Read letter={letter} />
        {this.state.isWrite ? null : <Button onClick={this.handleWriteClick} className='ui button'>Respond to Letter</Button>}
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

    const { plane, isWrite, isRead, isJournal } = this.state

    return (
      <>
        <NavBar isWrite={isWrite} isRead={isRead} isJournal={isJournal} handleWriteClick={this.handleWriteClick} handleJournalClick={this.handleJournalClick} handleCloseClick={this.handleCloseClick} /> 
        { isWrite ? this.renderWrite() : null }
        { isRead ? this.renderRead(plane) : null }
        { isJournal ? this.renderJournal() : null }
        { plane ? <Plane handlePlaneClick={this.handlePlaneClick} plane={plane}/> : null }
      </>
    )
  }

}

export default Desk
