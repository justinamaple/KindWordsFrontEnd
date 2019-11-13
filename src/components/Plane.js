import React from 'react'
import Button from './Button'
import fairy from '../assets/images/glow.png'
import anime from 'animejs'

class Plane extends React.Component {
  state = {
    start: ''
  }

  componentDidMount() {
    this.setUpAnimation()
  }

  setUpAnimation = () => {
    const starts = [
      'bottom',
      'top'
      // 'bottom left',
      // 'top left',
      // 'bottom right',
      // 'top right'
    ]

    let start = starts[Math.floor(Math.random() * starts.length)]

    this.setState({
      start: start
    })

    this.animate(start)
  }

  animate = start => {
    const { throwPlane } = this.props

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
      opacity: [{ value: 0.5 }, { value: 0 }],
      easing: 'linear',
      duration: 10000,
      complete: throwPlane
    }

    console.log(animeObj, this.state.start)

    anime(animeObj)
  }

  render() {
    const { handleClick, plane } = this.props
    const { start } = this.state
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
