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

    const randomNum = () => Math.floor(Math.random() * 50) + 5

    const randomMovement = () => {
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
        { value: (randomNum() + 200) * -1 },
        { value: (randomNum() + 400) * -1 },
        { value: (randomNum() + 600) * -1 }
      ],
      opacity: [{ value: 0.5 }, { value: 0 }],
      easing: 'linear',
      duration: 10000,
      complete: throwPlane
    }

    console.log(animeObj)
    anime(animeObj)
  }

  render() {
    const { handleClick, plane } = this.props
    const starts = ['bottom', 'left-bottom', 'right-bottom']
    let randomStart = starts[Math.floor(Math.random() * starts.length)]

    return (
      <Button
        className={`star ui button ${randomStart}`}
        onClick={e => handleClick(e, plane)}
      >
        <img id='glowImg' src={fairy} alt='glowing light' />
      </Button>
    )
  }
}

export default Plane
