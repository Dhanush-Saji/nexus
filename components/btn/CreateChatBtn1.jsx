'use client'
import { addChatRef } from '@/converters/ChatMember';
import { IconMessagePlus } from '@tabler/icons-react'
import { serverTimestamp, setDoc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify';
import { v4 as uuid } from 'uuid';
import { Button } from '../ui/button';

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
        <Button onClick={createNewChat} className='w-full ' variant="outline">  <IconMessagePlus className='mr-2' /> New chat</Button>
    )
}

export default CreateChatBtn1