import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Plane from '../components/Plane'
import Read from '../components/Read'
import Write from '../components/Write'

class Desk extends Component {
  state = {
    letterStack: [],
    loggedIn: null,
    intervalId: null,
    plane: null
  }

  startPlanes = () => {
    const planeInterval = setInterval(this.throwPlane, 5000)
    this.setState({ intervalId: planeInterval })
  }

  stopPlanes = () => {
    clearInterval(this.state.intervalId);
  }

  throwPlane = () => {
    if(this.state.letterStack.length === 0) {
      this.stopPlanes()
      this.fetchLetters()
      return;
    }

    const stack = [...this.state.letterStack]
    const plane = stack.pop();
    this.setState({ letterStack: stack, plane: plane })
  }

  componentDidMount() {
    this.fetchLetters()
  }

  componentWillUnmount() {
    this.stopPlanes()
  }

  fetchLetters = () => {
    // TODO: grab the 10 most recent letters this account
    // has not yet seen (make a new api on back end)
    const LETTERS_URL = 'http://localhost:3000/letters'

    fetch(LETTERS_URL)
      .then(resp => resp.json())
      .then(json => {
        this.setState({ letterStack: json })
        this.startPlanes()
      })
  }

  renderWrite = () => {
    return <Write />
  }

  renderRead = letter => {
    // TODO: mark the letter as seen for the given account
    return <Read letter={letter} />
  }

  renderPlane = () => {
    if (this.state.plane)
      return <Plane key={this.state.plane.id} plane={this.state.plane} handleClick={this.renderRead} />
  }

  render() {
    return (
      <>
        <NavBar handleWrite={this.renderWrite} handleRead={this.renderRead} />
        {this.renderPlane()}
        <Write />
        <Read />
      </>
    )
  }
}

export default Desk
