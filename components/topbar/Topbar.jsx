import Image from 'next/image'
import React from 'react'
import './Topbar.css'
import { MessageSquareText } from 'lucide-react'

const Topbar = () => {
    return (
        <header className='fixed items-center flex w-full px-6 py-4 bg-[rgba(255,255,255,0.03)]'>
            <div className='flex gap-4 items-center'>
                <Image src={'/logo.png'} width={40} height={40} objectFit='contain' />
                <span className='text-center text-2xl font-semibold leading-none'>Dimension</span>
            </div>
            {/* <div className='z-[4] absolute'> */}
            {/* <ShinyButton text="Shiny Button" /> */}
            <MessageSquareText className='ml-auto mr-4 text-[#e2e8ff]' />
            <button className='glassBtn w-fit px-4 py-2'>
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