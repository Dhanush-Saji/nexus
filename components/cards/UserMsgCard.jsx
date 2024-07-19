"use client"
import { limitedSortedMessageRef } from '@/converters/Messages'
import Image from 'next/image'
import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Skeleton } from '../ui/skeleton'

const UserMsgCard = ({ chatId }) => {
    const [messages, loading, error] = useCollectionData(
        limitedSortedMessageRef(chatId)
    )
    return (
        <>
            {
                !loading && (
                    <div className='flex gap-4 items-center border p-3 border-gray-50/10 rounded-[10px]'>
                        <Skeleton className='h-12 w-12 rounded-full bg-slate-600' />
                        <div className='space-y-2 flex-1'>
                            <Skeleton className='h-4 w-full bg-slate-600' />
                            <Skeleton className='h-4 w-full bg-slate-600' />
                        </div>
                    </div>
                )
            }
            <div className="flex gap-4 items-center border p-3 border-gray-50/10 rounded-[10px]">
                hjhjhj
                {/* <Image src={data?.image} width={40} height={40} alt='user' className='rounded-full'  />
            <div className="flex flex-col">
                <h3 className=' font-[700] text-[0.9rem]'>{data?.name}</h3>
                <h3 className=' opacity-50 font-[500] text-[0.8rem]'>What's up</h3>
            </div> */}
            </div>
        </>
    )
}

export default UserMsgCard