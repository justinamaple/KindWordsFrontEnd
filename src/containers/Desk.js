import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Plane from '../components/Plane'
import Read from '../components/Read'
import Write from '../components/Write'
import Journal from '../containers/Journal'
import CreateResponse from '../components/CreateResponse'

const LETTERS_URL = 'http://localhost:3000/letters'
const SEENS_URL = 'http://localhost:3000/seens'

class Desk extends Component {
  state = {
    letterStack: [],
    lettersSeen: {},
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
    const stack = [...this.state.letterStack]
    let plane = stack.pop()
    while (plane && this.state.lettersSeen[plane.id.toString()]) {
      plane = stack.pop()
    }

    if (stack.length === 0) {
      this.stopPlanes()
      this.fetchLetters()
      return
    }

    this.setState({ letterStack: stack, plane: plane })
  }

  componentDidMount() {
    this.fetchLetters()
    this.fetchSeen()
  }

  componentWillUnmount() {
    this.stopPlanes()
  }

  fetchLetters = () => {
    fetch(LETTERS_URL)
      .then(resp => resp.json())
      .then(json => {
        this.setState({ letterStack: json })
        this.startPlanes()
      })
  }

  fetchSeen = () => {
    const { accountId } = this.props

    fetch(SEENS_URL + `?account_id=${accountId}`)
      .then(resp => resp.json())
      .then(json => {
        this.setState({ lettersSeen: json })
      })
  }

  postSeen = letterId => {
    const { accountId } = this.props

    fetch(SEENS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        account_id: accountId,
        letter_id: letterId
      })
    })
  }

  handleWriteClick = () => {
    this.setState({
      isWrite: true,
      isRead: false,
      isJournal: false
    })
  }

  renderWrite = () => {
    this.stopPlanes()
    return (
      <Write
        accountId={this.props.accountId}
        icon={this.props.icon}
        handleCloseClick={this.clearDesk}
      />
    )
  }

  handlePlaneClick = (_e, letter) => {
    let lettersSeen = {
      ...this.state.lettersSeen,
      [letter.id]: true
    }
    // Optimistically add letter to lettersSeen in state
    this.setState({
      isRead: true,
      lettersSeen: lettersSeen
    })
    this.postSeen(letter.id)
    this.incrementViews(letter)
  }

  incrementViews = letter => {
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

  incrementResponses = letter => {
    fetch(LETTERS_URL + `/${letter.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        num_responses: letter.num_responses + 1
      })
    })
      .then(res => res.json())
      .then(console.log)
  }

  renderRead = letter => {
    this.stopPlanes()
    return <Read letter={letter} handleClick={this.handleRespondClick} />
  }

  handleRespondClick = () => {
    this.setState({
      isJournal: false,
      isRead: true,
      isWrite: true
    })
  }

  renderCreateResponse = letter => {
    return (
      <CreateResponse
        accountId={this.props.accountId}
        icon={this.props.icon}
        letter={letter}
        isRead={true}
        isWrite={true}
        handleCloseClick={this.clearDesk}
        incrementResponses={this.incrementResponses}
      />
    )
  }

  handleJournalClick = () => {
    this.setState({
      isJournal: true,
      isRead: false,
      isWrite: false
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
    const { accountId } = this.props

    this.stopPlanes()
    return <Journal accountId={accountId} handleCloseClick={this.clearDesk} />
  }

  clearDesk = () => {
    this.setState({
      isWrite: false,
      isRead: false,
      isJournal: false
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
          handleWriteClick={this.handleWriteClick}
          handleJournalClick={this.handleJournalClick}
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
