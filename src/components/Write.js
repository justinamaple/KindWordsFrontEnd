import React, { Component } from 'react'
import Button from './Button'
import Icon from './Icon'

const LETTERS_URL = 'http://localhost:3000/letters'

class Write extends Component {
  state = {
    content: ''
  }

  handleTextChange = e => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmitLetter = () => {
    const { handleCloseClick, accountId } = this.props
    fetch(LETTERS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        content: this.state.content,
        account_id: accountId
      })
    })
      .then(res => res.json())
      .then(console.log)

    handleCloseClick()
  }

  handleSubmitResponse = () => {
    const { letterId, handleCloseClick, accountId } = this.props

    fetch(LETTERS_URL + `/${letterId}/responses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        content: this.state.content,
        letter_id: letterId,
        account_id: accountId
      })
    })
      .then(res => res.json())
      .then(console.log)

    handleCloseClick()
  }

  render() {
    const { isRead } = this.props

    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <textarea
                rows='20'
                onChange={this.handleTextChange}
                placeholder={
                  isRead
                    ? 'Write your response here!'
                    : 'Write your letter here!'
                }
                value={this.state.content}
              ></textarea>
            </div>
          </div>
          <span className='right floated icon'>
            <Icon />
          </span>
        </div>
        <Button
          onClick={isRead ? this.handleSubmitResponse : this.handleSubmitLetter}
          className='ui centered button'
        >
          Send
        </Button>
      </div>
    )
  }
}

export default Write
