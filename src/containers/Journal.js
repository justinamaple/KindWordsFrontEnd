import React, { Component } from 'react'
import Button from '../components/Button'

class Journal extends Component {
  render() {
    const { setDesk } = this.props

    return (
      <div>
        <h2>JOURNAL</h2>
        <Button onClick={() => setDesk()} className='ui button'>
          Close
        </Button>
      </div>
    )
  }
}

export default Journal
