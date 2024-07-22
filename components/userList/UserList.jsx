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
      <div className='flex flex-col h-[77vh] overflow-y-auto'>
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