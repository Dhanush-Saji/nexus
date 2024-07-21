'use client'
import React, { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { IconCopy, IconShare } from '@tabler/icons-react'
import { Label } from '../ui/label'
import { toast } from 'react-toastify'
import { Input } from '../ui/input'

const ShareChatUrl = ({chatId}) => {
    const [isOpen, setIsOpen] = useState(false)
    const linkToChat = `${window.location.href}`
    const copyToClipboard = async() =>{
        try {
            await navigator.clipboard.writeText(linkToChat)
            toast.success('Copied successfully')
            setIsOpen(false)
        } catch (error) {
            console.log(error);
            toast.error(error)
        }
    }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
            <div className='rounded-full border p-1 transition-all hover:bg-white hover:text-neutral-900'>
            <IconShare className=' scale-[0.8]' />
          </div>
            </DialogTrigger>
            <DialogContent className='sm:max-w-md bg-[#05051F]'>
                <DialogHeader>
                    <DialogTitle>Share Link</DialogTitle>
                    <DialogDescription>Any user who has been {" "}
                    <span className='text-indigo-600 font-bold'>grant access</span>
                    can use this link
                    </DialogDescription>
                </DialogHeader>
                <div className='flex items-center space-x-2'>
                    <div className='grid flex-1 gap-2'>
                        <Label htmlFor='link' className='sr-only'>Link</Label>
                        <Input className='text-black/80' id='link' defaultValue={linkToChat} readOnly />
                    </div>
                    <Button type='submit' onClick={()=>copyToClipboard()} size={'sm'} className='px-3'>
                        <span className='sr-only'>Copy</span>
                        <IconCopy className='h-4 2-4' />
                    </Button>
                </div>
                <DialogFooter className='sm:justify-start'>
                    <DialogClose asChild>
                        <Button type='button' variant={'secondary'}>Close</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
  )
}

export default ShareChatUrl