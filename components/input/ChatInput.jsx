'use client'
import { messageRef } from '@/converters/Messages'
import { IconSend2 } from '@tabler/icons-react'
import { addDoc, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import ShimmerButton from '../magicui/shimmer-button'

const ChatInput = ({chatId}) => {
  const session = useSession()
  const [inputText, setinputText] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(inputText == ''){
      return
    }
    try {
      const userToStore = {
        id:session.data.user.id,
        email:session.data.user.email,
        name:session.data.user.name,
        image:session.data.user.image || ''
    }
    await addDoc(messageRef(chatId),{
        input:inputText,
        timestamp: serverTimestamp(),
        user:userToStore,
    })
    setinputText('')
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="message-send area bg-[#1a2337] px-4 flex my-auto h-[8vh] rounded-b-[10px]">
            <form onSubmit={handleSubmit} className="flex gap-2 w-full items-center">
          <input value={inputText} onChange={(e)=>{setinputText(e.target.value)}} type='text' placeholder='Enter message ..'
          className={
            `flex text-white h-10 w-full border-none px-3 text-sm  file:border-0 file:bg-transparent bg-white/10
          file:text-sm file:font-medium placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[0px] focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           group-hover/input:shadow-none transition duration-400 rounded-[8px]
           `}
        />
        <div type='submit' className={`relative z-[9999] ${inputText == ''?'opacity-40 pointer-events-none':'opacity-100 pointer-events-auto cursor-pointer'}`}>
        <ShimmerButton className="shadow-2xl w-fit">
            <IconSend2 />
          </ShimmerButton>
        </div>
            </form>
          </div>
  )
}

export default ChatInput