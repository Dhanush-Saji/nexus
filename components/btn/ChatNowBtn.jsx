'use client'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'

const ChatNowBtn = () => {
    const router = useRouter()
    const session = useSession()
    console.log(session)
    const openChatPage = () => {
        console.log('clicked')
        if (session.status == 'authenticated') {
            router.push('/chat')
        } else {
            signIn()
        }
    };
    return (
        <span onClick={openChatPage} className="whitespace-pre-wrap text-center text-sm p-2 lg:p-0 rounded-full font-medium leading-none tracking-tight text-white lg:text-lg w-fit mx-auto relative z-40">
            Chat Now
        </span>
    )
}

export default ChatNowBtn