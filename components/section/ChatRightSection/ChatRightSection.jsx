'use client'
import { IconMessage, IconPhone, IconSend2, IconShare, IconTrashX, IconUserPlus, IconVideo } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import MessageCard from '../MessageCard/MessageCard'
import Image from 'next/image'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import CreateChatBtn1 from '@/components/btn/CreateChatBtn1'
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
  const router = useRouter()
  const [initialMessages, setinitialMessages] = useState(null)
  const [hasAccess, sethasAccess] = useState(false)
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
  const checkAccess = async () => {
    try {
      const accessCal = (await getDocs(chatMembersRef(search))).docs.map((doc) => doc.id).includes(session?.data?.user?.id)
      sethasAccess(accessCal);
      if (!accessCal) {
        router.push('/chats')
        return
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (session.status == 'authenticated')
      checkAccess()
  }, [session])
  useEffect(() => {
    checkInitialMsg()
  }, [])
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
    <>
      {
        search ?
          <div className="right-part h-full flex flex-col">
            <div className="chat-header flex justify-between px-3 h-16 border-b border-gray-50/10">
              <div className="flex gap-4 items-center">
                <ChatMembersBadge chatId={search} />
              </div>
              <ChatSettings />
            </div>
            <div className="chatting-portion bg-gradient-to-b from-[#131a29] to-[#0b1019] h-[67vh] overflow-y-scroll px-4 flex flex-col">
              <ChatMessages chatId={search} session={session} initialMessages={initialMessages} />
            </div>
            <ChatInput chatId={search} />
          </div>
          :
          <div className="flex flex-col justify-center items-center m-auto space-y-2">
            <IconMessage className="h-10 w-10" />
            <h1 className="text-5xl font-extralight">Welcome!</h1>
            <h2 className="mb-2">Lets get you started by opening your chats!</h2>
            {/* <CreateChatBtn1 /> */}
          </div>
      }
    </>

  )
}

export default ChatRightSection