'use client'
import { IconMessage, IconPhone, IconSend2, IconShare, IconTrashX, IconUserPlus, IconVideo } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import MessageCard from '../MessageCard/MessageCard'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { getDocs } from 'firebase/firestore'
import { sortedMessageRef } from '@/converters/Messages'
import { chatMembersRef } from '@/converters/ChatMember'
import ChatInput from '@/components/input/ChatInput'
import ChatMessages from '../ChatMessages/ChatMessages'
import ChatMembersBadge from '@/components/badges/ChatMembersBadge'
import { Tooltip, TooltipContent, TooltipProvider,TooltipTrigger } from '@/components/ui/tooltip'
import ChatSettings from '../ChatSettings/ChatSettings'

const ChatRightSection = () => {
  const [initialMessages, setinitialMessages] = useState(null)
  const session = useSession()
  const searchParams = useSearchParams()
  const search = searchParams.get('chatId')
  const checkInitialMsg = async () => {
    try {
      if (search) {
        const initialMessagesRes = (await getDocs(sortedMessageRef(search))).docs.map((doc) => doc.data())
        setinitialMessages(initialMessagesRes)
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    checkInitialMsg()
  }, [])
  return (
    <div className='hidden md:flex w-full'>
      {
        search ?
          <div className="right-part flex flex-col w-full h-[87vh]">
            <div className="chat-header flex justify-between px-3  h-[8vh] border-b border-gray-50/10">
              <div className="flex gap-4 items-center">
                <ChatMembersBadge chatId={search} />
              </div>
              <ChatSettings chatId={search} />
            </div>
            <div className="chatting-portion bg-gradient-to-b from-[#1a2337] to-[#080a0c] h-[71vh] overflow-y-auto px-4 flex flex-col">
              <ChatMessages chatId={search} session={session?.data} initialMessages={initialMessages} />
            </div>
            <ChatInput chatId={search} />
          </div>
          :
          <div className="flex flex-col justify-center items-center m-auto space-y-2">
            <IconMessage className="h-10 w-10" />
            <h1 className="text-5xl font-extralight">Welcome!</h1>
            <h2 className="mb-2">Lets get you started by opening your chats!</h2>
          </div>
      }
    </div>

  )
}

export default ChatRightSection