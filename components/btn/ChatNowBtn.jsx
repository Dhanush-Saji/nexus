
import Link from 'next/link'
import React from 'react'

const ChatNowBtn = () => {
    return (
        <Link href={'/chats'}>
        <span className="whitespace-pre-wrap text-center text-sm p-2 lg:p-0 rounded-full font-medium leading-none tracking-tight text-white lg:text-lg w-fit mx-auto relative z-40">
            Chat Now
        </span>
        </Link>
    )
}

export default ChatNowBtn