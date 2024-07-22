'use client'
import { sortedMessageRef } from '@/converters/Messages'
import { useLanguageStore } from '@/store/store'
import { IconMessageCircleFilled } from '@tabler/icons-react'
import React, { createRef, useEffect } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import MessageCard from '../MessageCard/MessageCard'

const ChatMessages = ({chatId,session,initialMessages}) => {
    const language = useLanguageStore((state)=>state.language)
    const messageEndRef = createRef()
    const [messages,loading,error] = useCollectionData(
        sortedMessageRef(chatId),{initialValue:initialMessages}
    )
    useEffect(()=>{
        messageEndRef.current?.scrollIntoView({behavior: 'smooth'})
    },[messages,messageEndRef])
  return (
    <>
    {!loading && messages?.length == 0 && (
            <div className='flex flex-col justify-center m-auto items-center p-16 rounded-xl space-y-2 bg-indigo-400 text-white font-extralight text-center'>
                <IconMessageCircleFilled className='h-10 w-10' />
                <h2>
                    <p className='font-bold'>Invite a friend</p>
                    <p className='font-bold'>Send your first message in any language</p>
                </h2>
                <p>The AI will auto-detect & translate it all for you</p>
            </div>
        )}
        {
            messages?.map((message,index)=>(
                <React.Fragment key={index}>
                    <MessageCard message={message} language={language} key={index} direction={message?.user?.id == session?.user?.id?'right':'left'} />
                    <MessageCard message={message} language={language} key={index} direction={message?.user?.id == session?.user?.id?'right':'left'} />
                    <MessageCard message={message} language={language} key={index} direction={message?.user?.id == session?.user?.id?'right':'left'} />
                    <MessageCard message={message} language={language} key={index} direction={message?.user?.id == session?.user?.id?'right':'left'} />
                    <MessageCard message={message} language={language} key={index} direction={message?.user?.id == session?.user?.id?'right':'left'} />
                    <MessageCard message={message} language={language} key={index} direction={message?.user?.id == session?.user?.id?'right':'left'} />
                    <MessageCard message={message} language={language} key={index} direction={message?.user?.id == session?.user?.id?'right':'left'} />
                    <MessageCard message={message} language={language} key={index} direction={message?.user?.id == session?.user?.id?'right':'left'} />
                    <MessageCard message={message} language={language} key={index} direction={message?.user?.id == session?.user?.id?'right':'left'} />
                    <MessageCard message={message} language={language} key={index} direction={message?.user?.id == session?.user?.id?'right':'left'} />
                    <MessageCard message={message} language={language} key={index} direction={message?.user?.id == session?.user?.id?'right':'left'} />
                    <MessageCard message={message} language={language} key={index} direction={message?.user?.id == session?.user?.id?'right':'left'} />
                    <MessageCard message={message} language={language} key={index} direction={message?.user?.id == session?.user?.id?'right':'left'} />
                    <MessageCard message={message} language={language} key={index} direction={message?.user?.id == session?.user?.id?'right':'left'} />
                    <MessageCard message={message} language={language} key={index} direction={message?.user?.id == session?.user?.id?'right':'left'} />
                    <MessageCard message={message} language={language} key={index} direction={message?.user?.id == session?.user?.id?'right':'left'} />
                    <MessageCard message={message} language={language} key={index} direction={message?.user?.id == session?.user?.id?'right':'left'} />
                    <MessageCard message={message} language={language} key={index} direction={message?.user?.id == session?.user?.id?'right':'left'} />
                    <MessageCard message={message} language={language} key={index} direction={message?.user?.id == session?.user?.id?'right':'left'} />
                </React.Fragment>
            ))
        }
        <div ref={messageEndRef} />
    </>
  )
}

export default ChatMessages