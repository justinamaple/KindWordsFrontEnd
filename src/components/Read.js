import React, { Component } from 'react'
import Button from './Button'
import Icon from './Icon'

class Read extends Component {
  render() {
    const { letter, handleWriteClick, isWrite } = this.props

    return (
      <div className='ui centered card'>
        <div className='content'>
          <p>{letter.content}</p>
          <span className='right floated icon'>
            <Icon />
          </span>
        </div>
        {isWrite ? null : (
          <Button onClick={handleWriteClick} className='ui button'>
            Respond to Letter
          </Button>
        )}
      </div>
    )
  }
}

export default Read
