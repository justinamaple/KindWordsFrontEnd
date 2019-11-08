import React, { Component } from 'react'
import NavBar from '../components/NavBar';
import Plane from '../components/Plane';

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
      this.setState({letterStack: json})
    })
  }

  renderPlanes = () => {
    return this.state.letterStack.map(letter => <Plane key={ letter.id } letter={ letter } />)
  }

  render() {
    return (
      <>
        { this.renderPlanes() }
        <NavBar />
      </>
    )
  }
}

export default Desk
