import Image from 'next/image'
import React from 'react'
import './Topbar.css'
import { MessageSquareText } from 'lucide-react'
import Link from 'next/link'
import UserTopbarCard from '../cards/UserTopbarCard'
import ShimmerButton from '../magicui/shimmer-button'
import { IconMessagePlus } from '@tabler/icons-react'
import CreateChatBtn from '../btn/CreateChatBtn'
import LanguageSelect from '../dropdown/LanguageSelect'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import MobMenubar from '../section/MobMenubar'

const Topbar = () => {
    return (
        <header className='fixed items-center flex w-full px-6 h-[9vh] bg-[rgba(255,255,255,0.03)] backdrop-blur-[8px] z-[99999] topbar'>
            <Link href={'/'}>
                <div className='flex gap-2 md:gap-4 items-center'>
                    <Image placeholder='empty' priority={true} alt='logo' src={'/logo.png'} width={40} height={40} className=' object-contain !w-[30px] !h-[30px] md:!h-[40px] md:!w-[40px]' style={{ width: 'auto', height: 'auto' }} />
                    <span className='text-center text-xl md:text-2xl font-semibold leading-none'>Nexus</span>
                </div>
            </Link>
            {/* <div className='z-[4] absolute'> */}
            {/* <ShinyButton text="Shiny Button" /> */}
            {/* <MessageSquareText className='ml-auto mr-4 text-[#e2e8ff]' /> */}
            <div className='flex ml-auto items-center'>
                <LanguageSelect />
                <TooltipProvider delayDuration={0}>
                    <Tooltip>
                        <TooltipTrigger>
                            <CreateChatBtn />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Add new chat</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <UserTopbarCard />
                <MobMenubar />
            </div>
            {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/90 bg-clip-text text-center text-lg font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                    Login
                </span> */}
            {/* </div> */}
        </header>
    )
}

export default Topbar