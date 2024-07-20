import Loader from '@/components/miscellaneous/Loader'
import { toISTConverter } from '@/services/formatter';
import Image from 'next/image'
import React from 'react'

const MessageCard = ({direction='left',message,language}) => {
  return (
    <>
    {
        direction == 'left'?<div className='flex gap-2 items-start mt-4  max-w-[50%]'>
        <img src={message?.user?.image} width={40} height={40} alt='user' />
            <div className='flex flex-col'>
            <div className='bg-[#25314c] rounded-[18px] rounded-tl-none p-3 px-4 flex gap-2'>
                <span className='text-[0.9rem]'>
                {message?.translated?.[language] || message?.input}
                </span>
                {!message?.translated && <Loader />}
            </div>
                <p className=' opacity-40 text-[0.8rem] text-right mt-1'>{toISTConverter(message.timestamp)}</p>
            </div>
            </div>
            :
            <div className='flex gap-2 items-start mt-4  max-w-[50%] ml-auto'>
                <div className='flex flex-col'>
                <div className='bg-[#25314c] rounded-[18px] rounded-tr-none p-2 px-4 flex gap-2 items-center'>
                    <span className='text-[0.9rem]'>
                    {message?.translated?.[language] || message?.input}
                    </span>
                    {/* {!message?.translated && <Loader />} */}
                </div>
                    <p className=' opacity-40 text-[0.8rem] text-left mt-1'>{toISTConverter(message.timestamp)}</p>
                </div>
            <Image src={message?.user?.image} width={40} height={40} alt='user' className='rounded-full' />
                </div>
    }
    </>
    
  )
}

export default MessageCard