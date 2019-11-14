import React, { Component } from 'react'
import NavBar from './NavBar'
import Fairy from '../components/Fairy'
import Read from '../components/Read'
import Write from '../components/Write'
import Journal from '../containers/Journal'
import CreateResponse from '../components/CreateResponse'
import anime from 'animejs'
import BGImage from '../assets/images/forest-bg.png'

const LETTERS_URL = 'http://localhost:3000/letters'
const SEENS_URL = 'http://localhost:3000/seens'

class Desk extends Component {
  state = {
    letterStack: [],
    lettersSeen: {},
    isWrite: false,
    isRead: false,
    isJournal: false,
    fairy: null
  }

  componentDidMount() {
    if (!this.props.accountId) {
      this.props.history.push('/login')
    } else {
      this.fetchLetters()
      this.fetchSeen()
    }
  }

  fetchLetters = () => {
    fetch(LETTERS_URL)
      .then(resp => resp.json())
      .then(letters => {
        this.setState({ letterStack: letters })
        this.startFairy()
      })
  }

  fetchSeen = () => {
    const { accountId } = this.props

    fetch(`${SEENS_URL}?account_id=${accountId}`)
      .then(resp => resp.json())
      .then(json => {
        this.setState({ lettersSeen: json })
      })
  }

  startFairy = () => {
    this.throwFairy()
  }

  stopFairy = () => {
    anime.remove('.star')
  }

  throwFairy = () => {
    const stack = [...this.state.letterStack]
    let fairy = stack.pop()
    while (fairy && this.state.lettersSeen[fairy.id.toString()]) {
      fairy = stack.pop()
    }

    if (stack.length === 0) {
      this.stopFairy()
      this.fetchLetters()
    } else {
      this.setState({ letterStack: stack, fairy: fairy })
    }
  }

  renderFairy = () => {
    const starts = ['bottom', 'top']
    let start = starts[Math.floor(Math.random() * starts.length)]

    return (
      <Fairy
        key={this.state.fairy.id}
        fairy={this.state.fairy}
        handleClick={this.handleFairyClick}
        throwFairy={this.throwFairy}
        start={start}
      />
    )
  }

  handleFairyClick = (_e, letter) => {
    let lettersSeen = {
      ...this.state.lettersSeen,
      [letter.id]: true
    }
    this.setState({
      isRead: true,
      lettersSeen: lettersSeen
    })
    this.postSeen(letter.id)
    this.incrementViews(letter)
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
  }

  renderWrite = () => {
    const { accountId, icon } = this.props
    this.stopFairy()

    return (
      <Write
        accountId={accountId}
        icon={icon}
        setDesk={this.setDesk}
        postSeen={this.postSeen}
      />
    )
  }

  renderRead = letter => {
    this.stopFairy()
    return <Read letter={letter} setDesk={this.setDesk} />
  }

  renderCreateResponse = letter => {
    const { accountId, icon } = this.props

    return (
      <CreateResponse
        accountId={accountId}
        icon={icon}
        letter={letter}
        isRead={true}
        isWrite={true}
        setDesk={this.setDesk}
        incrementResponses={this.incrementResponses}
      />
    )
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
  }

  renderJournal = () => {
    const { accountId } = this.props

    this.stopFairy()
    return <Journal accountId={accountId} setDesk={this.setDesk} />
  }

  setDesk = (write = false, read = false, journal = false) => {
    this.setState({
      isWrite: write,
      isRead: read,
      isJournal: journal
    })

    if (!write && !read && !journal) this.startFairy()
  }

  isEmptyDesk = () => {
    const { isWrite, isRead, isJournal } = this.state
    return !isWrite && !isRead && !isJournal
  }

  componentWillUnmount() {
    this.stopFairy()
  }

  render() {
    const { fairy, isWrite, isRead, isJournal } = this.state
    const { handleSignOut } = this.props

    return (
      <>
        <NavBar setDesk={this.setDesk} handleSignOut={handleSignOut} />
        <div className='ui two column wide centered grid'>
          {isWrite && !isRead ? this.renderWrite() : null}
          {isRead && !isWrite ? this.renderRead(fairy) : null}
          {isWrite && isRead ? this.renderCreateResponse(fairy) : null}
          {isJournal ? this.renderJournal() : null}
          {fairy && this.isEmptyDesk() ? this.renderFairy() : null}
        </div>
      </>
    )
  }
}

export default Desk
