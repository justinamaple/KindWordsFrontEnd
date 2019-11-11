import React, { Component } from 'react'
import Button from './Button'

class Read extends Component {

  render () {

    const { letter, handleWriteClick, isWrite } = this.props

    return (
      <div className='card'>
        <p>{letter.content}</p>
        { isWrite ? null : <Button onClick={handleWriteClick} className='ui button'>Respond to Letter</Button> }
      </div>
    )
  }
}

export default Read
