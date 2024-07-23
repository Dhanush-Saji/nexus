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

const Topbar1 = () => {
    return (
        <header className='items-center justify-between flex w-full h-[9vh] backdrop-blur-[8px] relative z-[0] topbar'>
            <Link href={'/'} style={{marginLeft:'1rem'}}>
                <div className='flex gap-2 md:gap-4 items-center'>
                    <Image placeholder='empty' priority={true} alt='logo' src={'/logo.png'} width={40} height={40} className=' object-contain !w-[30px] !h-[30px] md:!h-[38px] md:!w-[38px]' style={{ width: 'auto', height: 'auto' }} />
                    <span className='text-center text-xl md:text-2xl font-semibold leading-none'>Nexus</span>
                </div>
            </Link>
            <div className='flex items-center mr-4'>
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
        </header>
    )
}

export default Topbar1