'use client'
import React, { useEffect } from 'react'
import {gsap} from 'gsap';

const CursorAnimation = () => {
  useEffect(() => {
    const handleMouseMove = (dets) => {
      gsap.to('#cursor', {
        left: dets.clientX,
        top: dets.clientY,
        delay: 0.1,
        duration: 0.2,
      })
    }
    const handleMouseEnter = () => {
      gsap.to('#cursor', {
        transform: 'translate(-50%, -50%) scale(1)',
        mixBlendMode: 'difference',
      backgroundColor: 'white',
      })
    }
    const handleMouseLeave = () => {
      gsap.to('#cursor', {
        transform: 'translate(-50%, -50%) scale(0.5)',
        mixBlendMode:'normal',
        backgroundColor:'rgba(255, 255, 255, 0.349)'
      })
    }
    document.addEventListener('mousemove', handleMouseMove)

    // Select all elements with the class cursorAnimationOnHover
    const hoverElements = document.querySelectorAll('.cursorAnimationOnHover')
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    // Clean up the event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])
  return (
    <div id="cursor"></div>
  )
}

export default CursorAnimation