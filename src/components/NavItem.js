import React from 'react'
import Button from './Button'

const NavItem = ({ onClick, className, text }) => {
  return (
    <div className='item'>
      <Button onClick={onClick} className={className}>
        {text}
      </Button>
    </div>
  )
}

export default NavItem
