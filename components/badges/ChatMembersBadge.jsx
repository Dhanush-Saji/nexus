'use client'
import { chatMembersRef } from '@/converters/ChatMember'
import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { AnimatedTooltip } from '../ui/animated-tooltip'

const ChatMembersBadge = ({chatId}) => {
    console.log(chatId);
    const [members,loading,error] = useCollectionData(
        chatMembersRef(chatId)
    )
    console.log(members);
  return (
    <>
    {
        members &&
            <AnimatedTooltip items={members} />
    }
    </>
    
  )
}

export default ChatMembersBadge