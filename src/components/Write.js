import React, { Component } from 'react'
import Button from './Button'

const LETTERS_URL = 'http://localhost:3000/letters'

class Write extends Component {

  state = {
    content: ""
  }

  handleTextChange = (e) => {
    console.log("typing letter!")
    this.setState({
      content: e.target.value
    })
  }

  handleSubmitLetter = () => {
    
    fetch(LETTERS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        content: this.state.content,
        account_id: this.props.accountId
      })
    })
    .then(res => res.json())
    .then(console.log)
    this.props.handleCloseClick()
  }

  handleSubmitResponse = () => {

    const { letterId, handleCloseClick, accountId } = this.props
  
    fetch(LETTERS_URL + `/${letterId}/responses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
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

  render () {

    const { isRead } = this.props

    return (
      <div className='card'>
        <div className="ui form">
          <div className="field">
            <textarea onChange={this.handleTextChange} placeholder={ isRead ? "Write your response here!" : "Write your letter here!" } value={this.state.content}></textarea>
          </div>
        </div>
        <Button onClick={ isRead ? this.handleSubmitResponse : this.handleSubmitLetter } className='ui button'>Send</Button>
      </div>
    )
  }
}

export default Write
