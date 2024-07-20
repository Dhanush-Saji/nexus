import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Badge1 from "@/components/badges/Badge1";
import ChatRightSection from "@/components/section/ChatRightSection/ChatRightSection";
import UserList from "@/components/userList/UserList";
import { chatMemberCollectionGroupRef } from "@/converters/ChatMember";
import { getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth";
import './chats.css'


const Page = async() => {
  const session = await getServerSession(authOptions)
    const chatsSnapshot = await getDocs(
      chatMemberCollectionGroupRef(session?.user.id)
    )
    const initialChats = chatsSnapshot.docs.map((doc)=>({
      ...doc.data(),
      timestamp:null
    }))
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