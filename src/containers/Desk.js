import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Plane from '../components/Plane'
import Read from '../components/Read'
import Write from '../components/Write'
import Journal from '../components/Journal'
import CreateResponse from '../components/CreateResponse'

const LETTERS_URL = 'http://localhost:3000/letters'

class Desk extends Component {
  state = {
    letterStack: [],
    isWrite: false,
    isRead: false,
    isJournal: false,
    intervalId: null,
    plane: null
  }

  startPlanes = () => {
    const planeInterval = setInterval(this.throwPlane, 5000)
    this.setState({ intervalId: planeInterval })
  }

  stopPlanes = () => {
    clearInterval(this.state.intervalId)
  }

  throwPlane = () => {
    if (this.state.letterStack.length === 0) {
      this.stopPlanes()
      this.fetchLetters()
      return
    }

    const stack = [...this.state.letterStack]
    const plane = stack.pop()
    this.setState({ letterStack: stack, plane: plane })
  }

  componentDidMount() {
    this.fetchLetters()
  }

  componentWillUnmount() {
    this.stopPlanes()
  }

  fetchLetters = () => {
    fetch(LETTERS_URL)
      .then(resp => resp.json())
      .then(json => {
<<<<<<< HEAD
        this.setState({
          letterStack: json,
          plane: json[Math.round(Math.random() * 10)] //this is just for testing!
        })
=======
        this.setState({ letterStack: json })
        this.startPlanes()
>>>>>>> 29c86c87b2fe00ebc2c6742953ee14a881bb55a2
      })
  }

  handleWriteClick = () => {
    this.setState({
      isWrite: true
    })
  }

  renderWrite = () => {
    this.stopPlanes()
    return (
      <Write
        accountId={this.props.accountId}
        handleCloseClick={this.handleCloseClick}
      />
    )
  }

  handlePlaneClick = (_e, letter) => {
    this.setState({
      isRead: true
    })
    this.incrementLetterViews(letter)
  }

  incrementLetterViews = letter => {
    fetch(LETTERS_URL + `/${letter.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        num_views: letter.num_views + 1
      })
    })
      .then(res => res.json())
      .then(console.log)
  }

  renderRead = letter => {
    this.stopPlanes()
    return <Read letter={letter} handleWriteClick={this.handleWriteClick} />
  }

  renderCreateResponse = letter => {
    return (
      <CreateResponse
        accountId={this.props.accountId}
        letter={letter}
        isRead={true}
        isWrite={true}
        handleCloseClick={this.handleCloseClick}
      />
    )
  }

  handleJournalClick = () => {
    this.setState({
      isJournal: true
    })
  }

  renderPlane = () => {
    return (
      <Plane
        key={this.state.plane.id}
        plane={this.state.plane}
        handleClick={this.handlePlaneClick}
      />
    )
  }

  renderJournal = () => {
    this.stopPlanes()
    return <Journal />
  }

  handleCloseClick = () => {
    this.setState({
      isWrite: false,
      isRead: false,
<<<<<<< HEAD
      isJournal: false,
      plane: this.state.letterStack[Math.round(Math.random() * 10)] //for testing purposes
=======
      isJournal: false
>>>>>>> 29c86c87b2fe00ebc2c6742953ee14a881bb55a2
    })
    this.startPlanes()
  }

  isEmptyDesk = () => {
    const { isWrite, isRead, isJournal } = this.state
    return !isWrite && !isRead && !isJournal
  }

  render() {
    const { plane, isWrite, isRead, isJournal } = this.state

    return (
      <>
        <NavBar
          isWrite={isWrite}
          isRead={isRead}
          isJournal={isJournal}
          handleWriteClick={this.handleWriteClick}
          handleJournalClick={this.handleJournalClick}
          handleCloseClick={this.handleCloseClick}
        />
        {isWrite && !isRead ? this.renderWrite() : null}
        {isRead && !isWrite ? this.renderRead(plane) : null}
        {isWrite && isRead ? this.renderCreateResponse(plane) : null}
        {isJournal ? this.renderJournal() : null}
        {plane && this.isEmptyDesk() ? this.renderPlane() : null}
      </>
    )
  }
}

export default Desk
