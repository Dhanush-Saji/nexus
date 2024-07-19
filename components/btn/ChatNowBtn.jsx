'use client'
import { serverTimestamp, setDoc } from 'firebase/firestore';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { v4 as uuid } from 'uuid';
import { toast } from 'react-toastify';
import { addChatRef } from '../../converters/ChatMember';

const ChatNowBtn = () => {
    const chatId = uuid()
    const router = useRouter()
    const session = useSession()
    const createNewChat = async () => {
        if (session.status != 'authenticated') {
            signIn()
            return
        }
        try {
            await setDoc(addChatRef(chatId,session?.data?.user?.id),{
                userId: session?.data?.user?.id,
                email:session?.data?.user?.email,
                timestamp:serverTimestamp(),
                isAdmin:true,
                chatId:chatId,
                image:session?.data?.user?.image || ''
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
        <span onClick={createNewChat} className="whitespace-pre-wrap text-center text-sm p-2 lg:p-0 rounded-full font-medium leading-none tracking-tight text-white lg:text-lg w-fit mx-auto relative z-40">
            Chat Now
        </span>
    )
}

export default ChatNowBtn