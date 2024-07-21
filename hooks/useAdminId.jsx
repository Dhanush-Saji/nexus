"use client"
import { chatMembersAdminRef } from '@/converters/ChatMember'
import { getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

const useAdminId = (chatId) => {
    const [adminId, setadminId] = useState("")
    useEffect(()=>{
        const fetchAdminStatus = async() =>{
            const adminId = (await getDocs(chatMembersAdminRef(chatId))).docs.map((doc) => doc.id)
            setadminId(adminId[0])
        }
        fetchAdminStatus()
    },[chatId])
return adminId
}

export default useAdminId