import Loader from '@/components/miscellaneous/Loader'
import { toISTConverter } from '@/services/formatter';
import Image from 'next/image'
import React from 'react'

const MessageCard = ({ direction = 'left', message, language }) => {
    return (
        <>
            {
                direction == 'left' ? <div className='flex gap-2 items-start mt-4'>
                    <Image src={message?.user?.image} width={40} height={40} alt='user' className='rounded-full' />
                    <div className='flex flex-col'>
                        <div className='bg-[#25314c] rounded-[18px] rounded-tl-none p-2 px-4 flex gap-2 items-center flex-wrap max-w-[65vw]'>
                            <p className='text-[0.9rem] break-words whitespace-normal' style={{ wordBreak: 'break-all' }}>
                                {
                                   !message?.translated ? <Loader /> : message?.translated?.[language]
                                }
                            </p>
                        </div>
                        <p className=' opacity-40 text-[0.8rem] text-right mt-1'>{toISTConverter(message.timestamp)}</p>
                    </div>
                </div>
                    :
                    <div className='flex gap-2 items-start mt-4  ml-auto'>
                        <div className='flex flex-col'>
                            <div className='bg-[#5A65CA] rounded-[15px] rounded-tr-none p-2 px-4 flex gap-2 items-center flex-wrap max-w-[65vw]'>
                                <p className='text-[0.9rem] break-words whitespace-normal' style={{ wordBreak: 'break-all' }}>
                                {
                                   !message?.translated ? <Loader /> : message?.translated?.[language]
                                }
                                </p>
                            </div>
                            <p className='opacity-40 text-[0.8rem] text-left mt-1'>{toISTConverter(message.timestamp)}</p>
                        </div>


                        <Image src={message?.user?.image} width={40} height={40} alt='user' className='rounded-full' />
                    </div>
            }
        </>

    )
}

export default MessageCard