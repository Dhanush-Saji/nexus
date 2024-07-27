'use client'
import React, { useEffect, useState } from 'react'
import UserMsgCard from '../cards/UserMsgCard'
import useDebounce from '@/hooks/useDebounce'
import { collection, getDocs, where,query, orderBy, startAt,endAt } from 'firebase/firestore'
import { firestoreDb } from '@/lib/firebaseConfig'
import { IconLoader } from '@tabler/icons-react'
import { useSession } from 'next-auth/react'
import { chatMemberCollectionGroupRef } from '@/converters/ChatMember'
import {useCollectionData} from 'react-firebase-hooks/firestore'

const UserList = ({members=[]}) => {
  const {data:session} = useSession()
  const [isLoading, setisLoading] = useState(false)
  return (
      <div className='flex flex-col h-[71vh] md:h-[79vh] overflow-y-auto'>
        {
          isLoading?<div className='w-full flex justify-center m-auto'>
            <IconLoader className="mr-2 h-6 w-6 animate-spin" />
            </div>:members?.length>0? members?.map((item,index)=>(
              <React.Fragment key={index}>
                <UserMsgCard key={item?.chatId} chatId={item?.chatId} />
              </React.Fragment>
          )):
          <div className='w-full flex m-auto justify-center opacity-50'>
            No chats
          </div>
        }
      </div>
  )
}

export default UserList