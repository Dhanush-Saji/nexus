'use client'
import Badge1 from '@/components/badges/Badge1'
import UserList from '@/components/userList/UserList'
import {getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import './chats.css'
import ChatRightSection from '@/components/section/ChatRightSection/ChatRightSection'
import { useSession } from 'next-auth/react'
import { chatMemberCollectionGroupRef } from '@/converters/ChatMember'

const Page = () => {
  const session = useSession()
 const [initialChats, setinitialChats] = useState([])

 const snapFn = async () => {
  try {
    const chatsSnapshot = await getDocs(
      chatMemberCollectionGroupRef(session?.data?.user?.id)
    )
    const initialCustomChats = chatsSnapshot.docs.map((doc)=>({
      ...doc.data(),
      timestamp:null
    })) || []
    setinitialChats(initialCustomChats)
  } catch (error) {
    console.error(error);
  }
 };
  useEffect(()=>{
    snapFn()
  },[])
  //   useEffect(()=>{
  // const unsubscribe = onAuthStateChanged(auth,async(user)=>{
  //   if(user){
  //     const userRef = doc(firestore,'users',user.uid)
  //     const userSnap = await getDoc(userRef)
  //     const userData = userSnap.data()
  //     setuser(userData)
  //   }
  //   else{
  //     setuser(null)
  //     router.push('/login')
  //   }
  // })
  // return () => unsubscribe()
  //   },[auth,router])
  return (
    <main className="flex items-center w-full flex-col relative h-[100vh] px-6">
      <div className="chatGrid mt-24 w-full bg-[#111827] rounded-[10px] border border-gray-50/10 h-[85vh]">
        <div className="left-part  border-r border-gray-50/10 flex flex-col">
          <div className="flex gap-2 px-5 items-center border-b border-gray-50/10 h-16">
            <h3 className=' font-[700] text-[1.5rem]'>Chats</h3>
            <Badge1 num={initialChats?.length} />
          </div>
          <UserList initialChats={initialChats} />
        </div>
        <ChatRightSection />
      </div>
    </main>
  )
}

export default Page