
import Loader from '@/components/miscellaneous/Loader'
import React from 'react'

const loading = () => {
  return (
    <div className='flex items-center p-10 justify-center'>
    <Loader />
    </div>
  )
}

export default loading