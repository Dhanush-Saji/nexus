'use client'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'

const SignoutBtn = () => {
  const session = useSession();
  console.log('SESSION',session)
  return (
    <button onClick={()=>signOut()}>Logout</button>
  )
}

export default SignoutBtn