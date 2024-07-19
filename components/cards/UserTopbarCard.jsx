'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import SignoutBtn from '../signoutBtn/SignoutBtn'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import Image from 'next/image'

const UserTopbarCard = () => {
    const { data,status } = useSession()
    return (
        <>
            {
                status == 'authenticated' ? <>
                    <DropdownMenu dir='ltr'>
                        <DropdownMenuTrigger className="ml-4">
                            <Image src={data?.user?.image} width={40} height={40} alt='user' className='rounded-full'  />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='bg-[#182137] mr-4 min-w-[200px] rounded-[5px] text-[#e2e8ff]'>
                            <DropdownMenuLabel>{data?.user?.name}</DropdownMenuLabel>
                            <DropdownMenuSeparator className='bg-neutral-500' />
                            <DropdownMenuItem className='cursor-pointer hover:bg-[#1c263e]'>Profile</DropdownMenuItem>
                            <DropdownMenuItem onClick={()=>signOut()} className='cursor-pointer hover:bg-[#1c263e]'>Sign Out</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </> :
                    <button onClick={() => signIn()} className="ml-4 glassBtn1 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,var(--black-color1),45%,#1e2631,55%,var(--black-color1))] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Login
                    </button>
            }
        </>
    )
}

export default UserTopbarCard