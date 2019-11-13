import React from 'react'
import Button from './Button'
import star from '../assets/images/star.png'
import anime from 'animejs'

class Plane extends React.Component {
  componentDidMount() {
    this.animate()
  }

  animate = () => {
    const { throwPlane } = this.props

    const randNum = () => {
      let num = Math.floor(Math.random() * 10)
      if (num % 2 === 0) {
        return [-1000, 1000]
      } else {
        return [1000, -1000]
      }
    }

    const randPos = () => {
      return Math.floor(Math.random() * 500) + 100
    }

    anime({
      targets: '.star',
      translateX: randNum,
      translateY: [{ value: randPos }, { value: randPos }, { value: randPos }],
      opacity: [{ value: 0.5 }, { value: 0 }],
      easing: 'easeInOutSine',
      duration: 15000,
      complete: throwPlane,
      scale: 2
    })
  }

  render() {
    const { handleClick, plane } = this.props

    return (
      <Button className='star ui button' onClick={e => handleClick(e, plane)}>
        <img src={star} alt='star' />
      </Button>
    )
  }
}

export default Plane
