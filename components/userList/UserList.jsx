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

const UserList = ({initialChats=[]}) => {
  const {data:session} = useSession()
  console.log(session)
  const [isLoading, setisLoading] = useState(false)
  const [searchInput, setsearchInput] = useState('')
  const [userListArray, setuserListArray] = useState([])
  const [members,loading,error] = useCollectionData(
    session && chatMemberCollectionGroupRef(session?.user.id),
    {
        initialValue:initialChats
    }
)
  // const userRef = collection(firestoreDb, "users")
  // const debounceSearch = useDebounce(searchInput.toLowerCase(),100)
  // const searchUser = async () => {
  //   try {
  //     if(searchInput != ''){
  //       setisLoading(true)
  //       const q = query(userRef, orderBy("name"));
  //       const querySnapshot = await getDocs(q);
  //       const users = querySnapshot.docs.map(doc => ({
  //         id: doc.id,
  //         ...doc.data()
  //       })).filter(user => user.name.toLowerCase().includes(searchInput));
  //       setuserListArray(users)
  //     }else{
  //       setuserListArray([])
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }finally{
  //     setisLoading(false)
  //   }
  // };
  // useEffect(() => {
  //   searchUser()
  // }, [searchInput])
  return (
    <div className="flex flex-col gap-4">
      {/* <input value={searchInput} onChange={(e) => setsearchInput(e.target.value)} type='text' placeholder='Search or start new chat..'
        className={
          `flex h-11 w-full border-none bg-[#25314C] text-white shadow-input px-3 py-1 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400 rounded-[8px]
           `}
      /> */}
      <div className='flex flex-col h-[65vh] overflow-y-auto'>
        {
          isLoading?<div className='w-full flex justify-center m-auto'>
            <IconLoader className="mr-2 h-6 w-6 animate-spin" />
            </div>:members?.length>0? members?.map((item,index)=>(
            <UserMsgCard key={index} chatId={item?.chatId} />
          )):
          <div className='w-full flex m-auto justify-center opacity-50'>
            No chats
          </div>
        }
      </div>
    </div>
  )
}

export default UserList