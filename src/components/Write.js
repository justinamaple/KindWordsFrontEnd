import React, { Component } from 'react'
import Button from './Button'

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
    const LETTERS_URL = 'http://localhost:3000/letters'
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

  render () {
    return (
      <div className='card'>
        <div className="ui form">
          <div className="field">
            <textarea onChange={this.handleTextChange} placeholder="Write Your Letter Here!" value={this.state.content}></textarea>
          </div>
        </div>
        <Button onClick={this.handleSubmitLetter} className='ui button'>Submit Letter</Button>
      </div>
    )
  }
}

export default Write
