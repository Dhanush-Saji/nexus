import Image from 'next/image'
import React from 'react'
import { BorderBeam } from '../magicui/border-beam'
import './HeroSection.css'
import ShimmerButton from '../magicui/shimmer-button'
import AnimatedShinyText from '../magicui/animated-shiny-text'
import { ArrowRightIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const HeroSection = () => {
  return (
    <main className="flex justify-center items-center w-full min-h-[100vh] flex-col pt-[9rem]">
     <div className="z-10 flex items-center justify-center">
      <div
        className={cn(
          "mb-4 relative group rounded-full border border-black/5 bg-[rgba(255,255,255,0.1)] text-base transition-all ease-in hover:cursor-pointer hover:bg-[rgba(255,255,255,0.3)]",
        )}
      >
        <AnimatedShinyText className="customBorder2 backdrop-blur-sm inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span className='gradient1 bg-clip-text'>✨ new update 2.1</span>
        </AnimatedShinyText>
      </div>
    </div>
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-transparent to-[rgba(255,255,255,1)] bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
      Dimension is the new
      </span>
      <span className="pointer-events-none whitespace-pre-wrap gradient1 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
      standard for chats
      </span>
      <span className='mt-4 text-xl opacity-70 '>Chat in any language you want</span>
      {/* <button className='relative px-8 py-2 w-[131px] h-[44px] rounded-[12px] z-0 gradient1'>Chat
      <BorderBeam size={250} duration={12} delay={0} className={'absolute w-[139px] h-[52px] top-[-4px] left-[-4px] rounded-[12px] z-[2]'} />
      <BorderBeam size={250} duration={12} delay={1} className={'absolute w-[147px] h-[60px] top-[-8px] left-[-8px] rounded-[16px] z-[1]'} />
      <BorderBeam size={250} duration={12} delay={2} className={'absolute w-[155px] h-[68px] top-[-12px] left-[-12px] rounded-[20px]'} />
      </button> */}
      <ShimmerButton className="shadow-2xl mt-2">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
          Chat Now
        </span>
      </ShimmerButton>
      <div className="customFadingEffect relative m-auto flex flex-col items-center justify-center overflow-hidden rounded-[18px] p-4 w-[70%] mt-8 customBorder1">
      <Image src={'/demo-desktop.png'} className="rounded-[18px] w-[100%] h-auto" width={800} height={500} unoptimized={true} />
      <BorderBeam size={200} duration={12} delay={5} />
      <BorderBeam size={200} duration={12} delay={0} />
    </div>
    </main>
  )
}

export default HeroSection