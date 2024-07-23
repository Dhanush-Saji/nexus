import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import MobChatSection from '@/components/section/MobChatSection/MobChatSection'
import React from 'react'
import { getServerSession } from "next-auth";

const Page = async({params:{chatId}}) => {
  const session = await getServerSession(authOptions)
  return (
    <main className="flex items-center w-full flex-col relative h-[83vh] md:h-[100vh] px-3 py-[2vh] overflow-hidden">
      <div className=" w-full bg-[#111827] rounded-[10px] border border-gray-50/10 h-[79vh] md:h-[85vh]">
      <MobChatSection chatId={chatId} session={session} />
      </div>
      </main>
  )
}

export default Page