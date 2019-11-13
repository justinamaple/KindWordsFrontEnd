import React, { Component } from 'react'
import Button from './Button'
import fairy from '../assets/images/glow.png'
import anime from 'animejs'

class Plane extends Component {
  componentDidMount() {
    this.animate()
  }

  animate = () => {
    const { throwPlane, start } = this.props
    let randomNum

    if (start === 'top') {
      randomNum = () => Math.floor(Math.random() * 100)
    } else {
      randomNum = () => Math.floor(Math.random() * -100)
    }

    let randomMovement = () => {
      return anime.random(-`${randomNum()}`, `${randomNum()}`) + 'rem'
    }

    const animeObj = {
      targets: '.star',
      translateX: [
        { value: randomMovement() },
        { value: randomMovement() },
        { value: randomMovement() },
        { value: randomMovement() }
      ],
      translateY: [
        { value: randomNum() * 4 },
        { value: randomNum() * 8 },
        { value: randomNum() * 12 }
      ],
      opacity: [{ value: 1 }, { value: 0 }],
      easing: 'easeOutSine',
      duration: 10000,
      complete: throwPlane
    }

    console.log(animeObj, start)

    anime(animeObj)
  }

  render() {
    const { handleClick, plane, start } = this.props
    return (
      <Button
        className={`star ui button ${start}`}
        onClick={e => handleClick(e, plane)}
      >
        <img id='glowImg' src={fairy} alt='glowing light' />
      </Button>
    )
  }
}

export default Plane
