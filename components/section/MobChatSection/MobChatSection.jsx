import ChatMembersBadge from '@/components/badges/ChatMembersBadge'
import { chatMembersRef } from '@/converters/ChatMember'
import { sortedMessageRef } from '@/converters/Messages'
import { getDocs } from 'firebase/firestore'
import React from 'react'
import ChatSettings from '../ChatSettings/ChatSettings'
import ChatMessages from '../ChatMessages/ChatMessages'
import ChatInput from '@/components/input/ChatInput'
import { redirect } from "next/navigation";

const MobChatSection = async ({ chatId, session }) => {
  const initialMessagesRes = (await getDocs(sortedMessageRef(chatId))).docs.map((doc) => doc.data())
  const hasAccess = (await getDocs(chatMembersRef(chatId))).docs.map((doc) => doc.id).includes(session?.user?.id)
  if (!hasAccess) {
    redirect('/chats')
  }
  return (
    <div className="right-part h-full flex flex-col w-full">
      <div className="chat-header flex justify-between px-3  h-[8vh] border-b border-gray-50/10">
        <div className="flex gap-4 items-center">
          <ChatMembersBadge chatId={chatId} />
        </div>
        <ChatSettings chatId={chatId} />
      </div>
      <div className="chatting-portion bg-gradient-to-b from-[#131a29] to-[#0b1019] h-[63vh] overflow-y-auto px-3 flex flex-col">
        <ChatMessages chatId={chatId} session={session} initialMessages={initialMessagesRes} />
      </div>
      <ChatInput chatId={chatId} />
    </div>
  )
}

export default MobChatSection