'use client'
import { addChatRef } from '@/converters/ChatMember';
import { IconMessagePlus } from '@tabler/icons-react'
import { serverTimestamp, setDoc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify';
import { v4 as uuid } from 'uuid';

const CreateChatBtn1 = () => {
    const chatId = uuid()
    const router = useRouter()
    const session = useSession()
    const createNewChat = async () => {
        if (session.status != 'authenticated') {
            signIn()
            return
        }
        try {
            await setDoc(addChatRef(chatId, session?.data?.user?.id), {
                userId: session?.data?.user?.id,
                name: session?.data?.user?.name,
                email: session?.data?.user?.email,
                timestamp: serverTimestamp(),
                isAdmin: true,
                chatId: chatId,
                image: session?.data?.user?.image || ''
            })
            toast.success('Your chat has been created')
            router.push(`/chats`)
        } catch (error) {
            console.log(error)
            let err = error?.message || ''
            toast.error(`${err}`)
        }
    };
    return (
        <button onClick={createNewChat} className='bg-[var(--custom-white)] text-[var(--primary-color)] flex rounded-[8px] p-3 hover:bg-white'>
        Create new chat
        </button>
    )
}

export default CreateChatBtn1