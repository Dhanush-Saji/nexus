import { IconPhone, IconSend2, IconUserPlus, IconVideo } from '@tabler/icons-react'
import React from 'react'
import MessageCard from '../MessageCard/MessageCard'

const ChatRightSection = ({user}) => {
  console.log(user)
  return (
    <div className="right-part h-full flex flex-col">
          <div className="chat-header flex justify-between p-3 border-b border-gray-50/10">
          <div className="flex gap-4 items-center">
            <img src={user?.image} width={50} height={50} alt='user' />
            <div className="flex flex-col">
              <h3 className=' font-[700] text-[0.9rem]'>{user?.name}</h3>
              <h3 className=' opacity-50 font-[500] text-[0.8rem]'>{user?.email}</h3>
            </div>
          </div>
          <div className='flex gap-2 items-center'>
            <button className='rounded-full border p-1 transition-all hover:bg-white hover:text-neutral-900'>
            <IconPhone className=' scale-[0.8]' />
            </button>
            <button className='rounded-full border p-1'>
            <IconVideo className=' scale-[0.8]' />
            </button>
            <button className='rounded-full border p-1'>
            <IconUserPlus className=' scale-[0.8]' />
            </button>
          </div>
          </div>
          <div className="chatting-portion h-[66vh] bg-gradient-to-b from-[#131a29] to-[#0b1019] overflow-y-scroll px-4 flex flex-col">
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard direction='right' />
            <MessageCard direction='right' />
            <MessageCard />
            <MessageCard />
            
          </div>
          <div className="message-send area bg-[#111827] px-4 py-4">
            <div className="flex gap-2">
          <input type='text' placeholder='Enter message ..'
          className={
            `flex text-neutral-700 h-10 w-full border-none shadow-input px-3 text-sm  file:border-0 file:bg-transparent bg-neutral-200
          file:text-sm file:font-medium placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400 rounded-[8px]
           `}
        />
        <button className='bg-[#1c263e] p-2 px-4 rounded-[8px]'>
            <IconSend2 />
        </button>
            </div>
          </div>
        </div>
  )
}

export default ChatRightSection