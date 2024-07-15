import Image from 'next/image'
import React from 'react'
import './Topbar.css'
import { MessageSquareText } from 'lucide-react'

const Topbar = () => {
    return (
        <header className='fixed items-center flex w-full px-6 py-4 bg-[rgba(255,255,255,0.03)] backdrop-blur-[8px] z-[99999]'>
            <div className='flex gap-4 items-center'>
                <Image alt='logo' src={'/logo.png'} width={40} height={40} objectFit='contain' />
                <span className='text-center text-2xl font-semibold leading-none'>Nexus</span>
            </div>
            {/* <div className='z-[4] absolute'> */}
            {/* <ShinyButton text="Shiny Button" /> */}
            <MessageSquareText className='ml-auto mr-4 text-[#e2e8ff]' />
        
        <button className="glassBtn1 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,var(--black-color1),45%,#1e2631,55%,var(--black-color1))] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Login
        </button>
            {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/90 bg-clip-text text-center text-lg font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                    Login
                </span> */}
            {/* </div> */}
        </header>
    )
}

export default Topbar