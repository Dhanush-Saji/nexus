import React from 'react'
import UserCard from '../cards/UserCard'

const UserList = () => {
  return (
    <div className='flex flex-col gap-2'>
        <UserCard />
        <UserCard />
    </div>
  )
}

export default UserList