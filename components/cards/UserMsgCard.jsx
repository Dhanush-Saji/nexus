"use client"
import { limitedSortedMessageRef } from '@/converters/Messages'
import Image from 'next/image'
import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Skeleton } from '../ui/skeleton'
import { useSession } from 'next-auth/react'
import UserAvatar from './UserAvatar'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { toISTConverter } from '@/services/formatter'
import { useLanguageStore } from '@/store/store'

const UserMsgCard = ({ chatId }) => {
    const language = useLanguageStore((state)=>state.language)
    const searchParams = useSearchParams()
    const search = searchParams.get('chatId')
    const { data: session } = useSession();
    const [messages, loading, error] = useCollectionData(
        limitedSortedMessageRef(chatId)
    )
    const row = (message) => (
        <>
        <div className='hidden md:block'>
        <Link href={`/chats?chatId=${chatId}`}>
            <div
                className={`${chatId == search?'bg-[#283361]':'hover:bg-[#28336158]'} flex p-5 items-center space-x-2 cursor-pointer`}
            >
                <UserAvatar
                    name={message?.user.name || session?.user.name}
                    image={message?.user.image || session?.user.image}
                />
                <div className="flex-1">
                    <p className="font-bold text-[0.9rem]">
                        {message ? [message?.user.name || session?.user.name].toString().split(" ")[0] : "New Chat"}
                    </p>
                    <p className="text-gray-400 text-[0.8rem] whitespace-nowrap overflow-hidden text-ellipsis max-w-[10vw]">
                        {(message?.translated?message?.translated?.[language]:'') || "Get your conversation started"}
                    </p>
                </div>
                <div className="text-xs text-gray-400 text-right">
                    <p className="mb-auto">
                        {
                        message
                            ? toISTConverter(message.timestamp)
                            : "No messages yet"}
                    </p>
                    <p>chat #{prettyUUID()}</p>
                </div>
            </div>
        </Link>
        </div>
        <div className='block md:hidden'>
        <Link href={`/chats/${chatId}`}>
            <div
                className={`${chatId == search?'bg-[#283361]':'hover:bg-[#28336158]'} flex p-5 items-center space-x-2 cursor-pointer`}
            >
                <UserAvatar
                    name={message?.user.name || session?.user.name}
                    image={message?.user.image || session?.user.image}
                />
                <div className="flex-1">
                    <p className="font-bold text-[0.9rem]">
                        {message ? [message?.user.name || session?.user.name].toString().split(" ")[0] : "New Chat"}
                    </p>
                    <p className="text-gray-400 text-[0.8rem] whitespace-nowrap overflow-hidden text-ellipsis max-w-[40vw]">
                    {(message?.translated?message?.translated?.[language]:'') || "Get your conversation started"}
                    </p>
                </div>
                <div className="text-xs text-gray-400 text-right">
                    <p className="mb-auto">
                        {
                        message
                            ? toISTConverter(message.timestamp)
                            : "No messages yet"}
                    </p>
                    <p>chat #{prettyUUID()}</p>
                </div>
            </div>
        </Link>
        </div>
        </>
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