'use client'
import { addChatRef } from '@/converters/ChatMember';
import { IconMessagePlus } from '@tabler/icons-react'
import { serverTimestamp, setDoc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify';
import { v4 as uuid } from 'uuid';

const CreateChatBtn = () => {
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
            toast({
                title: 'Success',
                description: 'Your chat has been created',
                className: 'bg-green-600 text-white',
                duration: 2000
            })
            router.push(`/chats`)
        } catch (error) {
            console.log(error)
            let err = error?.message || ''
            toast({
                title: 'Error',
                description: `${err}`,
                className: 'bg-red-600 text-white',
                duration: 2000
            })
        }
    };
    return (
        <button onClick={createNewChat} className="ml-4 glassBtn1 inline-flex h-11 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,var(--black-color1),45%,#1e2631,55%,var(--black-color1))] bg-[length:200%_100%] px-4 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <IconMessagePlus />
        </button>
    )
}

export default CreateChatBtn