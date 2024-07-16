
import React from 'react'
import Particles from '../magicui/particles'

const ParticleBg = ({children}) => {
  return (
    <>
    <div className='z-[0] flex flex-col'>
    {children}
    </div>
    <Particles
        className="absolute inset-0 z-[-1]"
        quantity={100}
        ease={80}
        color={'#ffffff'}
        refresh
      />
    </>
  )
}

export default ParticleBg