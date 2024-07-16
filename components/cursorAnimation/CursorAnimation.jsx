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
    document.addEventListener('mousemove', handleMouseMove)
    // -----------------------------------------//
    const handleMouseMagnifyingEnter = () => {
      gsap.to('#cursor', {
        transform: 'translate(-50%, -50%) scale(1)',
        mixBlendMode: 'difference',
      backgroundColor: 'white',
      })
    }
    const handleMouseMagnifyingLeave = () => {
      gsap.to('#cursor', {
        transform: 'translate(-50%, -50%) scale(0.5)',
        mixBlendMode:'normal',
        backgroundColor:'rgba(255, 255, 255, 0.349)'
      })
    }

    const hoverElements = document.querySelectorAll('.cursorAnimationOnHover')
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseMagnifyingEnter)
      el.addEventListener('mouseleave', handleMouseMagnifyingLeave)
    })
     // -----------------------------------------//

     const handleMouseInvisibleEnter = () => {
      gsap.to('#cursor', {
        transform: 'translate(-50%, -50%) scale(0)',
      })
    }
    const handleMouseInvisibleLeave = () => {
      gsap.to('#cursor', {
        transform: 'translate(-50%, -50%) scale(0.5)',
      })
    }

    const hoverElements1 = document.querySelectorAll('.hideCursorOver')
    hoverElements1.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseInvisibleEnter)
      el.addEventListener('mouseleave', handleMouseInvisibleLeave)
    })

    // Clean up the event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseMagnifyingEnter)
        el.removeEventListener('mouseleave', handleMouseMagnifyingLeave)
      })
      hoverElements1.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseInvisibleEnter)
        el.removeEventListener('mouseleave', handleMouseInvisibleLeave)
      })
    }
  }, [])
  return (
    <div id="cursor" className='hidden sm:block'></div>
  )
}

export default CursorAnimation