'use client'
import DeleteChatButton from '@/components/btn/DeleteChatButton'
import InviteUser from '@/components/btn/InviteUser'
import ShareChatUrl from '@/components/btn/ShareChatUrl'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { IconShare, IconTrashX, IconUserPlus } from '@tabler/icons-react'
import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const ChatSettings = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('chatId')
  const {data:session} = useSession()
  return (
    <div className='flex gap-2 items-center'>
    {/* <div className='rounded-full border p-1 transition-all hover:bg-white hover:text-neutral-900'>
<IconPhone className=' scale-[0.8]' />
</div>
<div className='rounded-full border p-1 transition-all hover:bg-white hover:text-neutral-900'>
<IconVideo className=' scale-[0.8]' />
</div> */}
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          <InviteUser session={session} chatId={search} />
        </TooltipTrigger>
        <TooltipContent>
          <p>Add user to chat</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          <ShareChatUrl chatId={search} />
        </TooltipTrigger>
        <TooltipContent>
          <p>Share chat link</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          <DeleteChatButton chatId={search} />
        </TooltipTrigger>
        <TooltipContent>
          <p>Delete chat</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
  )
}

export default ChatSettings