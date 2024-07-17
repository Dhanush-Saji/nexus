import Image from 'next/image'
import React from 'react'
import './HeroSection.css'
import AnimatedShinyText from '@/components/magicui/animated-shiny-text'
import { cn } from '@/lib/utils'
import ShimmerButton from '@/components/magicui/shimmer-button'
import { BorderBeam } from '@/components/magicui/border-beam'
import TextRevealDirectionOpacity from '@/components/animation/TextRevealDirectionOpacity'
import TextRevealOpacity from '@/components/animation/TextRevealOpacity'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <main className="flex items-center w-full flex-col relative h-[100vh] overflow-hidden">
      <div className='flex flex-col gap-2 absolute z-[3] left-[50%] top-[15%]  translate-x-[-50%] items-center w-full'>
        <TextRevealDirectionOpacity delay={0} direction='tb'>
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
        </TextRevealDirectionOpacity>
        <TextRevealDirectionOpacity delay={0.3} direction='tb'>
          <span className="cursorAnimationOnHover relative z-50 whitespace-pre-wrap text-center max-w-[90vw] text-4xl md:text-5xl lg:text-7xl font-semibold leading-none dark:from-white dark:to-slate-900/10">
            Nexus is the new
          </span>
          <span className="cursorAnimationOnHover whitespace-pre-wrap gradient1 bg-clip-text text-center max-w-[90vw] text-4xl md:text-5xl lg:text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            way of chats
          </span>
        </TextRevealDirectionOpacity>
        <TextRevealDirectionOpacity delay={0.6} direction='tb'>
          <span className='mt-1 text-lg md:text-xl opacity-70 '>Chat in any language you want</span>
            <Link href={'/chats'}>
          <ShimmerButton className="shadow-2xl mt-4 w-fit mx-auto">
            <span className="whitespace-pre-wrap text-center text-sm p-2 lg:p-0 rounded-full font-medium leading-none tracking-tight text-white lg:text-lg w-fit mx-auto">
              Chat Now
            </span>
          </ShimmerButton>
            </Link>
        </TextRevealDirectionOpacity>
      </div>
      <div className="absolute z-0 left-[50%] top-[18%] translate-x-[-50%] w-full hidden lg:block">
        <div className="customContainer customFadingEffect z-0 left-[50%] top-0 translate-x-[-50%] w-full">
          <div className="customCircle customFadingEffect"></div>
          <div className="customOrbit">
            <img src="/beam.png" className="light-beam" />
          </div>
        </div>
      </div>
      <div className="absolute z-[1] left-[50%] top-[30%] translate-x-[-50%] w-full hidden lg:block">
        <div className="customContainer customFadingEffect z-0 left-[50%] top-0 translate-x-[-50%] w-full">
          <div className="customCircle customFadingEffect"></div>
          <div className="customOrbit1">
            <img src="/beam.png" className="light-beam" />
          </div>
        </div>
      </div>
      <TextRevealOpacity delay='0.7'>
        <div className="customFadingEffect hideCursorOver top-[55%] bg-[#05051e] flex flex-col items-center justify-center overflow-hidden rounded-[18px] p-4 w-[180%] lg:w-[70%] mt-0 md:mt-8 customBorder1 absolute z-[2] left-[50%] translate-x-[-20%] lg:translate-x-[-50%]">
          <Image alt='demo' src={'/demo-desktop.png'} className="rounded-[18px] w-[100%] h-auto" width={800} height={500} unoptimized={true} />
          <BorderBeam size={200} duration={12} delay={5} />
          <BorderBeam size={200} duration={12} delay={0} />
        </div>
      </TextRevealOpacity>
    </main>
  )
}

export default HeroSection