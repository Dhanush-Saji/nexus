'use client'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '../ui/sheet'
import { IconMenu2 } from '@tabler/icons-react'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'

const MobMenubar = () => {
    const { data,status } = useSession()
    return (
        <div className='flex items-center md:hidden'>
            {
                status == 'authenticated' ?
            <Sheet>
                <SheetTrigger>
                    <IconMenu2 className='m-auto' />
                </SheetTrigger>
                <SheetContent>
                    <div className='flex flex-col'>
                    <div className='flex gap-2 items-center'>
                    <Image src={data?.user?.image} width={40} height={40} alt='user' className='rounded-full'  />
                    <div className='flex flex-col justify-center'>
                        <span className='font-[700]'>{data?.user?.name}</span>
                        <span className='text-[0.8rem]'>{data?.user?.email}</span>
                    </div>
                    </div>
                    </div>
                </SheetContent>
            </Sheet>:
             <button onClick={() => signIn()} className="ml-4 glassBtn1 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,var(--black-color1),45%,#1e2631,55%,var(--black-color1))] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
             Login
         </button>
            }

        </div>
    )
}

export default MobMenubar