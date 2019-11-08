import React, { Component, Fragment } from 'react'
import _ from 'lodash'
import LoginScreen from './LoginScreen';

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

  render() {
    return (
      <>
        <LoginScreen />
        <h3>This is a desk lol</h3>
      </>
    )
  }
}

export default Desk
