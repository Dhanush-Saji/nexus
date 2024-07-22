'use client'
import { IconUserPlus } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { toast } from 'react-toastify'
import { getDocs, serverTimestamp, setDoc } from 'firebase/firestore'
import { addChatRef } from '@/converters/ChatMember'
import { getUserByEmailRef } from '@/converters/User'
import { useSession } from 'next-auth/react'

const InviteUser = ({chatId}) => {
    const session = useSession()
    const [open, setopen] = useState(false)
    const [inputVal, setinputVal] = useState('')
    const onSubmit = async() =>{
        if(!session?.data?.user.id) return
        const querySnapShot = await getDocs(getUserByEmailRef(inputVal))
        if(querySnapShot.empty){
            toast.error('Please enter an email of a registered user or send invites once they signed up')
            return
        }else{
            const user = querySnapShot.docs[0].data()
            try {
                await setDoc(addChatRef(chatId,user.id),{
                    userId:user.id,
                    name: user?.name,
                    email:user.email,
                    timestamp: serverTimestamp(),
                    isAdmin:false,
                    chatId:chatId,
                    image:user.image || ''
                })
                toast.success('The user has been added to the chat successfully')
            } catch (error) {
                console.log(error);
                toast.error('Ohh.. error in adding the user to the chat!')
            }finally{
                setopen(false)
            }
        }
    }
  return (
    <>
     <Dialog open={open} onOpenChange={setopen}>
            <DialogTrigger asChild>
            <div className='rounded-full border p-1 transition-all hover:bg-white hover:text-neutral-900'>
    <IconUserPlus className=' scale-[0.8]' />
  </div>
            </DialogTrigger>
            <DialogContent className='sm:max-w-md bg-[#05051F]'>
                <DialogHeader>
                    <DialogTitle>Add User to Chat</DialogTitle>
                    <DialogDescription>Simply enter another users email address to invite them to this chat {" "}
                    <span className='text-indigo-600 font-bold'>(Note: they must be registered)</span>
                    </DialogDescription>
                </DialogHeader>
                <Input className='text-black/80' placeholder='Enter email..'  type='text' onChange={(e) => setinputVal(e.target.value)} />
                <Button className='ml-auto sm:w-fit w-full' onClick={onSubmit}>Add to chat</Button>
            </DialogContent>
        </Dialog>
    
    </>
  )
}

export default InviteUser