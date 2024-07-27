import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Badge1 from "@/components/badges/Badge1";
import ChatRightSection from "@/components/section/ChatRightSection/ChatRightSection";
import UserList from "@/components/userList/UserList";
import { chatMemberCollectionGroupRef } from "@/converters/ChatMember";
import { getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth";
import './chats.css'
import ChatLeftSection from "@/components/section/ChatLeftSection/ChatLeftSection";


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
    <main className="flex items-center w-full flex-col relative h-[83vh] md:h-[91vh] px-3 py-[2vh]">
      <div className="grid grid-col-1 md:grid-cols-[30%,70%] w-full bg-[#1a2337] rounded-[10px] border border-gray-50/10 h-[79vh] md:h-[87vh]">
        <ChatLeftSection initialChats={initialChats} />
        <ChatRightSection />
      </div>
    </main>
  )
}

export default Page