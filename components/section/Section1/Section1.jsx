import { HoverEffect } from '@/components/ui/card-hover-effect';
import React from 'react'

export const projects = [
  {
    title: "Multi-Language Support",
    description:
      "Our app supports many languages, allowing you to connect globally with accurate and natural translations.",
    link: "https://stripe.com",
    image:'https://i.imgur.com/hyYnEkN.png'
  },
  {
    title: "Real-Time Translation",
    description:
      "Seamless communication. Instant language translation for smooth conversations between users typing in their preferred languages.",
    link: "https://netflix.com",
    image:'https://i.imgur.com/feDCfeb.png'
  },
  {
    title: "User-Friendly Interface",
    description:
      "Easy messaging and media sharing with seamless real-time translation for distraction-free conversations.",
    link: "https://google.com",
    image:'https://i.imgur.com/9axXTja.png'
  },
];
const Section1 = () => {
  return (
    <div className='h-[100vh] section1 px-[14rem] pt-[19rem] flex flex-col'>
      <div className='flex gap-2'>
      <span className="pointer-events-none whitespace-pre-wrap text-center text-4xl font-semibold leading-none dark:from-white dark:to-slate-900/10">
      Why Should You
      </span>
      <span className="pointer-events-none whitespace-pre-wrap gradient1 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Use Nexus?
      </span>
      </div>
      <span className="opacity-70 mt-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore eligendi perspiciatis architecto, molestiae optio. Nihil debitis praesentium amet corporis placeat
      </span>
      <div className=" mt-4">
      <HoverEffect items={projects} />
    </div>
    </div>
  )
}

export default Section1