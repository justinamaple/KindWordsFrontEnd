import React from 'react'
import Read from './Read'
import Write from './Write'

const CreateResponse = ({ letter, handleCloseClick, accountId }) => {
  return (
    <div className="ui two cards">
      <Read letter={letter} isWrite={true} />
      <Write
        accountId={accountId}
        letterId={letter.id}
        isRead={true}
        handleCloseClick={handleCloseClick}
      />
    </div>
  )
}

export default CreateResponse
