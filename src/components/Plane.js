import React from 'react'
import Button from './Button'
import fairy from '../assets/images/glow.png'
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
      return Math.floor(Math.random() * 700) + 100
    }

    let randomMovement = function() {
      return anime.random(-50, 50) + 'rem'
    }

    anime({
      targets: '.star',
      translateX: [
        { value: randomMovement },
        { value: randomMovement },
        { value: randomMovement },
        { value: randomMovement }
      ],
      translateY: [{ value: -200 }, { value: -400 }, { value: -600 }],
      opacity: [{ value: 0.5 }, { value: 0 }],
      easing: 'linear',
      duration: 10000,
      complete: () => this.animate()
    })
  }

  render() {
    const { handleClick, plane } = this.props

    return (
      <Button className='star ui button' onClick={e => handleClick(e, plane)}>
        <img id='glowImg' src={fairy} alt='glowing light' />
      </Button>
    )
  }
}

export default Plane
