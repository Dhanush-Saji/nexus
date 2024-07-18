'use client'
import Badge1 from '@/components/badges/Badge1'
import UserList from '@/components/userList/UserList'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import './chats.css'
import ChatRightSection from '@/components/section/ChatRightSection/ChatRightSection'
import { useSession } from 'next-auth/react'

const Page = () => {
  const {data,status} = useSession();
  const router = useRouter()
  const [user, setuser] = useState(null)
  useEffect(()=>{
    if(status == 'unauthenticated'){
      router.push('/')
    }
  },[data])
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
        <div className="left-part  border-r border-gray-50/10">
          <div className="flex gap-4 items-center p-3 border-b border-gray-50/10">
            <img src={user?.avatarUrl} width={50} height={50} alt='user' />
            <div className="flex flex-col">
              <h3 className=' font-[700] text-[0.9rem]'>{user?.name}</h3>
              <h3 className=' opacity-50 font-[500] text-[0.8rem]'>{user?.email}</h3>
            </div>
          </div>
          <div className="flex p-3 flex-col gap-4">
          <input type='text' placeholder='Search or start new chat..'
          className={
            `flex h-12 w-full border-none bg-[#1c263e] text-white shadow-input px-3 py-1 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400 rounded-[8px]
           `}
        />
        <div className="flex gap-2">
        <span className='font-[700] text-[1rem]'>Messages</span>
        <Badge1 />
        </div>
        <UserList />
          </div>
        </div>
        <ChatRightSection user={user} />
      </div>
    </main>
  )
}

export default Page