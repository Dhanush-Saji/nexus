import Image from 'next/image'
import React from 'react'
import './HeroSection.css'
import AnimatedShinyText from '@/components/magicui/animated-shiny-text'
import { cn } from '@/lib/utils'
import ShimmerButton from '@/components/magicui/shimmer-button'
import { BorderBeam } from '@/components/magicui/border-beam'

const HeroSection = () => {
  return (
    <main className="flex items-center w-full flex-col relative h-[100vh] overflow-hidden">
      <div className='flex flex-col gap-2 absolute z-[3] left-[50%] top-[15%]  translate-x-[-50%] items-center w-full'>
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
      <span className="pointer-events-none whitespace-pre-wrap text-center max-w-[90vw] text-4xl md:text-5xl lg:text-7xl font-semibold leading-none dark:from-white dark:to-slate-900/10">
        Dimension is the new
      </span>
      <span className="pointer-events-none whitespace-pre-wrap gradient1 bg-clip-text text-center max-w-[90vw] text-4xl md:text-5xl lg:text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        standard for chats
      </span>
      <span className='mt-1 text-lg md:text-xl opacity-70 '>Chat in any language you want</span>
      <ShimmerButton className="shadow-2xl mt-4">
        <span className="whitespace-pre-wrap text-center text-sm p-2 lg:p-0 rounded-full font-medium leading-none tracking-tight text-white lg:text-lg">
          Chat Now
        </span>
      </ShimmerButton>
      </div>
        <div className="absolute z-0 left-[50%] top-[18%] translate-x-[-50%] w-full hidden lg:block">
          <div class="customContainer customFadingEffect z-0 left-[50%] top-0 translate-x-[-50%] w-full">
            <div class="customCircle customFadingEffect"></div>
            <div class="customOrbit">
              <img src="/beam.png" class="light-beam" />
            </div>
          </div>
        </div>
        <div className="absolute z-[1] left-[50%] top-[30%] translate-x-[-50%] w-full hidden lg:block">
          <div class="customContainer customFadingEffect z-0 left-[50%] top-0 translate-x-[-50%] w-full">
            <div class="customCircle customFadingEffect"></div>
            <div class="customOrbit1">
              <img src="/beam.png" class="light-beam" />
            </div>
          </div>
        </div>
        <div className="customFadingEffect top-[50%] lg:top-[55%] bg-[#05051e] flex flex-col items-center justify-center overflow-hidden rounded-[18px] p-4 w-[180%] lg:w-[70%] mt-0 md:mt-8 customBorder1 absolute z-[2] left-[50%] translate-x-[-20%] lg:translate-x-[-50%]">
          <Image src={'/demo-desktop.png'} className="rounded-[18px] w-[100%] h-auto" width={800} height={500} unoptimized={true} />
          <BorderBeam size={200} duration={12} delay={5} />
          <BorderBeam size={200} duration={12} delay={0} />
        </div>
    </main>
  )
}

export default HeroSection