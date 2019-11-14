import React from 'react'
import Read from './Read'
import Write from './Write'

const CreateResponse = ({
  letter,
  setDesk,
  accountId,
  icon,
  incrementResponses
}) => {
  return (
    <>
      <div className='row three cards'>
        <div className='ui item'>
          <div className='ui card'>
            <h3>Fairy Message</h3>
          </div>
          <Read letter={letter} isWrite={true} icon={icon} />
        </div>
        <div className='ui item'>
          <div className='ui card'>
            <h3>Response</h3>
          </div>
          <Write
            accountId={accountId}
            icon={icon}
            letter={letter}
            isRead={true}
            setDesk={setDesk}
            incrementResponses={incrementResponses}
          />
        </div>
      </div>
    </>
  )
}

export default CreateResponse
