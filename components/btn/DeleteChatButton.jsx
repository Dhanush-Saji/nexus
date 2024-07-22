'use client'
import useAdminId from '@/hooks/useAdminId'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { IconLoader2, IconTrashX } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

const DeleteChatButton = ({ chatId }) => {
    const [isLoading, setisLoading] = useState(false)
    const { data: session } = useSession()
    const [open, setopen] = useState(false)
    const router = useRouter()
    const adminId = useAdminId(chatId)
    const handleDelete = async () => {
        try {
            setisLoading(true)
            const res = await fetch('/api/chat/delete', {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ chatId, adminId, userId: session?.user.id })
            })
            const data = await res.json()
            if (data?.success) {
                toast.success('Your chat has been deleted')
                router.replace('/chats')
            }
        } catch (error) {
            console.log(error);
        }finally{
            setisLoading(false)
            setopen(false)
        }
    }
    return (
        <>
            {
                adminId == session?.user.id && (
                    <>
                        <Dialog open={open} onOpenChange={setopen} className='max-w-[80vw]'>
                            <DialogTrigger asChild>
                                <div className='rounded-full p-1 transition-all bg-red-800 hover:bg-red-600'>
                                    <IconTrashX className=' scale-[0.8]' />
                                </div>
                            </DialogTrigger>
                            <DialogContent className='max-w-[85vw] sm:max-w-[30rem] bg-[#05051F]'>
                                <DialogHeader>
                                    <DialogTitle>Are you sure?</DialogTitle>
                                    <DialogDescription>This will delete chat for all user</DialogDescription>
                                </DialogHeader>
                                <div className='grid grid-cols-2 space-x-2'>
                                    <Button disabled={isLoading} variant={'destructive'} onClick={handleDelete}>
                                        {
                                            isLoading?<>
                                            <IconLoader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Please wait
                                            </>:'Delete'
                                        }
                                    </Button>
                                    <Button variant={'outline'} onClick={() => setopen(false)}>Cancel</Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </>
                )
            }
        </>
    )
}

export default DeleteChatButton