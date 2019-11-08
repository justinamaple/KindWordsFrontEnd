import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Plane from '../components/Plane'
import Read from '../components/Read'
import Write from '../components/Write'

class Desk extends Component {
  state = {
    letterStack: [],
    logged_in: null
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

  renderWrite = () => {
    console.log('write')
    return <Write />
  }

  renderRead = e => {
    console.log(e.target.id, this)
    return <Read />
  }

  renderPlanes = () => {
    return this.state.letterStack.map(letter => {
      return <Plane key={letter.id} letter={letter} handleClick={this.renderRead} />
    })
  }

  render() {
    return (
      <>
        <NavBar handleWrite={this.renderWrite} handleRead={this.renderRead} />
        {this.renderPlanes()}
        <Write />
        <Read />
      </>
    )
  }
}

export default Desk
