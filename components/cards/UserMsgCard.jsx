"use client"
import { limitedSortedMessageRef } from '@/converters/Messages'
import Image from 'next/image'
import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Skeleton } from '../ui/skeleton'
import { useSession } from 'next-auth/react'
import UserAvatar from './UserAvatar'

const UserMsgCard = ({ chatId }) => {
    const { data: session } = useSession();
    const [messages, loading, error] = useCollectionData(
        limitedSortedMessageRef(chatId)
    )
    const row = (message) => (
        <div
            className="flex p-5 items-center space-x-2 cursor-pointer hover:bg-slate-600"
        >
            <UserAvatar
                name={message?.user.name || session?.user.name}
                image={message?.user.image || session?.user.image}
            />
            <div className="flex-1">
                <p className="font-bold text-[0.9rem]">
                    {message ?[message?.user.name || session?.user.name].toString().split(" ")[0]:"New Chat"}
                </p>
                <p className="text-gray-400 line-clamp-1 text-[0.8rem]">
                    {message?.translated?.["en"] || "Get your conversation started"}
                </p>
            </div>
            <div className="text-xs text-gray-400 text-right">
                <p className="mb-auto">
                    {message
                        ? new Date(message.timestamp).toLocaleTimeString()
                        : "No messages yet"}
                </p>
                <p>chat #{prettyUUID()}</p>
            </div>
        </div>
    );
    const prettyUUID = (n = 4) => {
        return chatId.substring(0, n);
    };
    return (
        <>
            {
                loading && (
                    <div className='flex gap-4 items-center border p-3 border-gray-50/10 rounded-[10px]'>
                        <Skeleton className='h-12 w-12 rounded-full bg-slate-600' />
                        <div className='space-y-2 flex-1'>
                            <Skeleton className='h-4 w-full bg-slate-600' />
                            <Skeleton className='h-4 w-full bg-slate-600' />
                        </div>
                    </div>
                )
            }
            {messages?.length == 0 && !loading && row()}
            {messages?.map((message) => {
                return row(message);
            })}
            {/* <div className="flex gap-4 items-center border p-3 border-gray-50/10 rounded-[10px]">
                hjhjhj
                <Image src={data?.image} width={40} height={40} alt='user' className='rounded-full'  />
            <div className="flex flex-col">
                <h3 className=' font-[700] text-[0.9rem]'>{data?.name}</h3>
                <h3 className=' opacity-50 font-[500] text-[0.8rem]'>What's up</h3>
            </div>
            </div> */}
        </>
    )
}

export default UserMsgCard