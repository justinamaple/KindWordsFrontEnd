import React, { Component } from 'react'
import Read from './Read'
import Write from './Write'

class CreateResponse extends Component {

  render() {
   
    const { letter, isWrite, isRead, handleCloseClick, accountId } = this.props

    return (
      <div>
        <Write accountId={accountId} letterId={letter.id} isRead={isRead} handleCloseClick={handleCloseClick}/>
        <Read letter={letter} isWrite={isWrite}/>
      </div>
    )
  }
}

export default CreateResponse
