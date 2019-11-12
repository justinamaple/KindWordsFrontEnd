import React from 'react'
import Read from './Read'
import Write from './Write'

const CreateResponse = ({
  letter,
  handleCloseClick,
  accountId,
  icon,
  incrementResponses
}) => {
  return (
    <div className='two column row'>
      <Read letter={letter} isWrite={true} icon={icon} />
      <Write
        accountId={accountId}
        icon={icon}
        letter={letter}
        isRead={true}
        handleCloseClick={handleCloseClick}
        incrementResponses={incrementResponses}
      />
    </div>
  )
}

export default CreateResponse
