import React, { useEffect } from 'react'
import Button from './Button'
import fairy from '../assets/images/glow.png'
import anime from 'animejs'

const Plane = ({ throwPlane, handleClick, plane }) => {
  const starts = [
    'bottom',
    'top'
    // 'bottom left',
    // 'top left',
    // 'bottom right',
    // 'top right'
  ]

  let start = starts[Math.floor(Math.random() * starts.length)]

  useEffect(() => {
    animate()
  }, [])

  const animate = () => {
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

    console.log(animeObj, start)

    anime(animeObj)
  }

  return (
    <Button
      className={`star ui button ${start}`}
      onClick={e => handleClick(e, plane)}
    >
      <img id='glowImg' src={fairy} alt='glowing light' />
    </Button>
  )
}

export default Plane
