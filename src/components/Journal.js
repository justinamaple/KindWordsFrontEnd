import React, { Component } from 'react'
import Button from './Button'

class Journal extends Component {
  render() {
    return (
      <div>
        <h2>JOURNAL</h2>
        <Button onClick={this.props.handleCloseClick} className='ui button'>
          Close
        </Button>
      </div>
    )
  }
}

export default Journal
