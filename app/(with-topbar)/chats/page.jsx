import Badge1 from '@/components/badges/Badge1'
import UserList from '@/components/userList/UserList'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc, getDocs } from 'firebase/firestore'
import Image from 'next/image'
import React from 'react'
import './chats.css'
import ChatRightSection from '@/components/section/ChatRightSection/ChatRightSection'
import { useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { chatMemberCollectionGroupRef } from '@/converters/ChatMember'

const Page = async () => {
  const session = await getServerSession(authOptions)
  console.log(session)
  const chatsSnapshot = await getDocs(
    chatMemberCollectionGroupRef(session?.user.id)
  )
  const initialChats = chatsSnapshot.docs.map((doc)=>({
    ...doc.data(),
    timestamp:null
  }))
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
        <div className="left-part  border-r border-gray-50/10 flex flex-col gap-4 mt-4">
          <div className="flex gap-2 px-5 items-center">
            <h3 className=' font-[700] text-[1.5rem]'>Chats</h3>
            <Badge1 />
          </div>
          <UserList initialChats={initialChats} />
        </div>
        <ChatRightSection user={session?.user} />
      </div>
    </main>
  )
}

export default Page