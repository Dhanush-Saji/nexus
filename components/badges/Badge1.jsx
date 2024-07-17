import React from 'react'

const Badge1 = ({color='',num='0'}) => {
  return (
    <div className='w-6 h-6 rounded-full flex justify-center items-center bg-[#48A6C3] text-white'>{num}</div>
  )
}

export default Badge1