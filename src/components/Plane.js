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

    let randomX = () => Math.floor(Math.random() * 100) + 5
    let randomY = () => Math.floor(Math.random() * 1000) + 5
    let randomXMovement = () => {
      return anime.random(-`${randomX()}`, `${randomX()}`) + 'rem'
    }

    let bottomY = {
      translateY: [
        { value: randomY() * -1 },
        { value: randomY() * -1 },
        { value: randomY() * -1 }
      ]
    }

    let topY = {
      translateY: [
        { value: randomY() },
        { value: randomY() },
        { value: randomY() }
      ]
    }

    const baseAnime = {
      targets: '.star',
      translateX: [
        { value: randomXMovement() },
        { value: randomXMovement() },
        { value: randomXMovement() },
        { value: randomXMovement() }
      ],
      opacity: [{ value: 1 }, { value: 0 }],
      easing: 'easeOutSine',
      duration: 15000,
      complete: throwPlane
    }

    const updatedAnime = Object.assign(
      {},
      baseAnime,
      start === 'bottom' ? bottomY : topY
    )

    console.log(updatedAnime, start)

    anime(updatedAnime)
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
