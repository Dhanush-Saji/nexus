import Image from 'next/image'
import React from 'react'
import { BorderBeam } from '../magicui/border-beam'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <main className="flex justify-center items-center w-full min-h-[100vh] flex-col pt-[9rem]">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-transparent to-[rgba(255,255,255,1)] bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
      Dimension is the new
      </span>
      <span className="pointer-events-none whitespace-pre-wrap gradient1 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
      standard for chats
      </span>
      <div className="relative m-auto flex flex-col items-center justify-center overflow-hidden rounded-[18px] p-4 w-full">
      <Image src={'https://www.dimension.dev/build/q-3559dadb.png'} className="rounded-[18px] w-[90%]" width={800} height={500} />
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
    </main>
  )
}

export default HeroSection