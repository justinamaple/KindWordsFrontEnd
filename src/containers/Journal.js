import React, { Component } from 'react'
import Button from '../components/Button'
import Read from '../components/Read'
import LetterCollection from '../components/LetterCollection'

const JOURNAL_URL = 'http://localhost:3000/journal/'
const RESPONSES_URL = 'http://localhost:3000/responses-to/'
class Journal extends Component {
  state = {
    letter: {},
    letters: [],
    lettersHistory: [],
    response: {},
    responses: [],
    responseHistory: []
  }

  fetchAccountsLetters = () => {
    const { accountId } = this.props

    fetch(JOURNAL_URL + `${accountId}`)
      .then(resp => resp.json())
      .then(letters => {
        let letter = letters.pop()
        fetch(this.fetchLetterResponses(letter.id))

        this.setState({
          letter: letter,
          letters: letters
        })
      })
  }

  fetchLetterResponses = letterId => {
    fetch(RESPONSES_URL + `${letterId}`)
      .then(resp => resp.json())
      .then(responses => {
        let response = responses.pop()

        this.setState({
          response: response,
          responses: responses
        })
      })
  }

  renderJournalRead = () => {
    const { letter } = this.state

    if (letter) return <Read letter={letter} isWrite={false} />
  }

  renderResponseRead = () => {
    const { response } = this.state

    if (response) return <Read letter={response} isWrite={false} />
    else return <Read letter={null} isWrite={false} />
  }

  lettersBack = () => {
    let { letter, letters, lettersHistory } = this.state

    if (letters.length > 0) {
      lettersHistory.push(letter)
      letter = letters.pop()
      this.fetchLetterResponses(letter.id)
    }

    this.setState({
      letter: letter,
      letters: letters,
      lettersHistory: lettersHistory
    })
  }

  lettersForward = () => {
    let { letter, letters, lettersHistory } = this.state

    if (lettersHistory.length > 0) {
      letters.push(letter)
      letter = lettersHistory.pop()
      this.fetchLetterResponses(letter.id)
    }

    this.setState({
      letter: letter,
      letters: letters,
      lettersHistory: lettersHistory
    })
  }

  responsesBack = () => {
    let { response, responses, responseHistory } = this.state

    if (responses.length > 0) {
      responseHistory.push(response)
      response = responses.pop()
    }

    this.setState({
      response: response,
      responses: responses,
      responseHistory: responseHistory
    })
  }

  responsesForward = () => {
    let { response, responses, responseHistory } = this.state

    if (responseHistory.length > 0) {
      responses.push(response)
      response = responseHistory.pop()
    }

    this.setState({
      response: response,
      responses: responses,
      responseHistory: responseHistory
    })
  }

  componentDidMount() {
    this.fetchAccountsLetters()
  }

  render() {
    const { letter, response } = this.state

    return (
      <div>
        <h2>Journal</h2>
        <LetterCollection
          letter={letter}
          back={this.lettersBack}
          forward={this.lettersForward}
        />

        <LetterCollection
          letter={response}
          back={this.responsesBack}
          forward={this.responsesForward}
        />
        <br />
        <Button onClick={this.props.handleCloseClick} className='ui button'>
          Close
        </Button>
      </div>
    )
  }
}

export default Journal
