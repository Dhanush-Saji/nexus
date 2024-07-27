'use client'
import Badge1 from '@/components/badges/Badge1'
import UserList from '@/components/userList/UserList'
import { chatMemberCollectionGroupRef } from '@/converters/ChatMember'
import { useSession } from 'next-auth/react'
import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const ChatLeftSection = ({initialChats=[]}) => {
    const {data:session} = useSession()
    const [members,loading,error] = useCollectionData(
      session && chatMemberCollectionGroupRef(session?.user.id),
      {
          initialValue:initialChats
      }
  )
  return (
    <div className="left-part  border-r border-gray-50/10 flex flex-col">
    <div className="flex gap-2 px-5 items-center border-b border-gray-50/10 h-[8vh]">
      <h3 className=' font-[700] text-[1.2rem] md:text-[1.5rem]'>Chats</h3>
      <Badge1 num={members?.length} />
    </div>
    <UserList members={members} />
  </div>
  )
}

export default ChatLeftSection