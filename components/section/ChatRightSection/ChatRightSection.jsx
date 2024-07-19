import { IconMessage, IconPhone, IconSend2, IconUserPlus, IconVideo } from '@tabler/icons-react'
import React from 'react'
import MessageCard from '../MessageCard/MessageCard'
import Image from 'next/image'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import CreateChatBtn1 from '@/components/btn/CreateChatBtn1'

const ChatRightSection = ({user}) => {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },]
  return (
    <div className="flex flex-col justify-center items-center m-auto space-y-2">
        <IconMessage className="h-10 w-10" />
        <h1 className="text-5xl font-extralight">Welcome!</h1>
        <h2 className="mb-2">Lets get you started by opening your chats!</h2>
        {/* <CreateChatBtn1 /> */}
    </div>
    // <div className="right-part h-full flex flex-col">
    //       <div className="chat-header flex justify-between px-3 h-16 border-b border-gray-50/10">
    //       <div className="flex gap-4 items-center">
    //       <AnimatedTooltip items={people} />
    //       </div>
    //       <div className='flex gap-2 items-center'>
    //         <button className='rounded-full border p-1 transition-all hover:bg-white hover:text-neutral-900'>
    //         <IconPhone className=' scale-[0.8]' />
    //         </button>
    //         <button className='rounded-full border p-1 transition-all hover:bg-white hover:text-neutral-900'>
    //         <IconVideo className=' scale-[0.8]' />
    //         </button>
    //         <button className='rounded-full border p-1 transition-all hover:bg-white hover:text-neutral-900'>
    //         <IconUserPlus className=' scale-[0.8]' />
    //         </button>
    //       </div>
    //       </div>
    //       <div className="chatting-portion bg-gradient-to-b from-[#131a29] to-[#0b1019] h-[67vh] overflow-y-scroll px-4 flex flex-col">
    //         <MessageCard />
    //         <MessageCard />
    //         <MessageCard />
    //         <MessageCard direction='right' />
    //         <MessageCard direction='right' />
    //         <MessageCard />
    //         <MessageCard />
            
    //       </div>
    //       <div className="message-send area bg-[#111827] px-4 py-4">
    //         <div className="flex gap-2">
    //       <input type='text' placeholder='Enter message ..'
    //       className={
    //         `flex text-neutral-700 h-10 w-full border-none shadow-input px-3 text-sm  file:border-0 file:bg-transparent bg-neutral-200
    //       file:text-sm file:font-medium placeholder-text-neutral-600 
    //       focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
    //        disabled:cursor-not-allowed disabled:opacity-50
    //        shadow-[0px_0px_1px_1px_var(--neutral-700)]
    //        group-hover/input:shadow-none transition duration-400 rounded-[8px]
    //        `}
    //     />
    //     <button className='bg-[#1c263e] p-2 px-4 rounded-[8px]'>
    //         <IconSend2 />
    //     </button>
    //         </div>
    //       </div>
    //     </div>
  )
}

export default ChatRightSection