import { IconSend2 } from '@tabler/icons-react'
import React from 'react'

const ChatInput = ({chatId}) => {
  return (
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
  )
}

export default ChatInput