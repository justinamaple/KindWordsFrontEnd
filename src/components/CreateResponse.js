import React from 'react'
import Read from './Read'
import Write from './Write'

const CreateResponse = ({ letter, handleCloseClick, accountId, icon }) => {
  return (
    <div className='ui two cards'>
      <Read letter={letter} isWrite={true} icon={icon} />
      <Write
        accountId={accountId}
        icon={icon}
        letterId={letter.id}
        isRead={true}
        handleCloseClick={handleCloseClick}
      />
    </div>
  )
}

export default CreateResponse
