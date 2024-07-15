'use client'
import React from 'react'
import {gsap} from 'gsap';

const CursorAnimation = () => {
    document.addEventListener('mousemove',(dets)=>{
        gsap.to('#cursor',{
            left: dets.x,
            top: dets.y,
            delay: 0.1, // Add a 0.2 second delay
      duration: 0.2, // Adjust duration as needed
        })
    })
  return (
    <div id="cursor"></div>
  )
}

export default CursorAnimation