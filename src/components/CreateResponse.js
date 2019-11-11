import React, { Component } from 'react'
import Read from './Read'
import Write from './Write'

class CreateResponse extends Component {

  render() {
   
    const { letter, handleCloseClick, accountId } = this.props

    return (
      <div>
        <Write accountId={accountId} letterId={letter.id} isRead={true} handleCloseClick={handleCloseClick}/>
        <Read letter={letter} isWrite={true}/>
      </div>
    )
  }
}

export default CreateResponse
