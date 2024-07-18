import React from 'react'
import UserMsgCard from '../cards/UserMsgCard'

const UserList = () => {
  return (
    <div className='flex flex-col gap-2'>
        <UserMsgCard />
        <UserMsgCard />
    </div>
  )
}

export default UserList