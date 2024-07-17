import React from 'react'

const UserCard = () => {
    return (
        <div className="flex gap-4 items-center border p-3 border-gray-50/10 rounded-[10px]">
            <img src={'https://avataaars.io/?accessoriesType=Prescription01&avatarStyle=Circle&clotheColor=Blue02&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Auburn&facialHairType=BeardMagestic&hairColor=Auburn&hatColor=Pink&mouthType=Grimace&skinColor=Pale&topType=ShortHairDreads02'} width={50} height={50} alt='user' />
            <div className="flex flex-col">
                <h3 className=' font-[700] text-[0.9rem]'>Dhanush Saji</h3>
                <h3 className=' opacity-50 font-[500] text-[0.8rem]'>What's up</h3>
            </div>
        </div>
    )
}

export default UserCard