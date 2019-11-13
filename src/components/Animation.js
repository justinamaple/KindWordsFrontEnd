import React, { Component } from 'react'
import anime from 'animejs'

class Animation extends Component {
  setUpAnimation = () => {
    const { start } = this.props
    let randomNum = () => Math.floor(Math.random() * 50) + 5

    let randomMovement = () => {
      return anime.random(-`${randomNum()}`, `${randomNum()}`) + 'rem'
    }

    if (start === 'top') {
      randomNum = () => Math.floor(Math.random() * 100)
    } else if (start === 'bottom') {
      randomNum = () => Math.floor(Math.random() * -100)
    }
    this.animate(randomNum, randomMovement)
  }

  animate = () => {
    const { throwPlane } = this.props

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
      opacity: [{ value: 0.5 }, { value: 0 }],
      easing: 'linear',
      duration: 10000,
      complete: throwPlane
    }

    console.log(animeObj)
    anime(animeObj)
  }
}

export default Animation
