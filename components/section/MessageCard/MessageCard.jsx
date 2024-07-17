import React from 'react'

const MessageCard = ({direction='left'}) => {
  return (
    <>
    {
        direction == 'left'?<div className='flex gap-2 items-start mt-4  max-w-[50%]'>
        <img src={'https://avataaars.io/?accessoriesType=Prescription01&avatarStyle=Circle&clotheColor=Blue02&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Auburn&facialHairType=BeardMagestic&hairColor=Auburn&hatColor=Pink&mouthType=Grimace&skinColor=Pale&topType=ShortHairDreads02'} width={40} height={40} alt='user' />
            <div className='flex flex-col'>
            <div className='bg-[#25314c] rounded-[18px] rounded-tl-none p-3 px-4'>
                <span className='text-[0.9rem]'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum est ipsam, voluptas ab aut similique, itaque beatae alias architecto cupiditate cumque? Ullam illum recusandae sunt deleniti rem officia provident. Earum.
                </span>
            </div>
                <p className=' opacity-40 text-[0.8rem] text-right mt-1'>06:11 pm</p>
            </div>
            </div>:<div className='flex gap-2 items-start mt-4  max-w-[50%] ml-auto'>
                <div className='flex flex-col'>
                <div className='bg-[#25314c] rounded-[18px] rounded-tr-none p-3 px-4'>
                    <span className='text-[0.9rem]'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum est ipsam, voluptas ab aut similique, itaque beatae alias architecto cupiditate cumque? Ullam illum recusandae sunt deleniti rem officia provident. Earum.
                    </span>
                </div>
                    <p className=' opacity-40 text-[0.8rem] text-left mt-1'>06:11 pm</p>
                </div>
            <img src={'https://avataaars.io/?accessoriesType=Prescription01&avatarStyle=Circle&clotheColor=Blue02&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Auburn&facialHairType=BeardMagestic&hairColor=Auburn&hatColor=Pink&mouthType=Grimace&skinColor=Pale&topType=ShortHairDreads02'} width={40} height={40} alt='user' />
                </div>
    }
    </>
    
  )
}

export default MessageCard