
import { adminDb } from "@/firebase/firebase"
import { NextResponse } from "next/server"

export async function DELETE(req){
    const {chatId,adminId,userId} = await req.json()
    if(adminId != userId){
        return NextResponse.json({success:false},{status:500})
    }
    const ref = adminDb.collection("chats").doc(chatId)
    const bulkWriter = adminDb.bulkWriter()
    const MAX_RETRY_ATTEMPTS = 3
    bulkWriter.onWriteError((error)=>{
        if(error.failedAttempts == MAX_RETRY_ATTEMPTS){
            return true
        }else{
            console.log("Failed write at document",error.documentRef.path);
            return false
        }
    })
    try {
        await adminDb.recursiveDelete(ref,bulkWriter)
        return NextResponse.json({success:true},{status:200})
    } catch (error) {
        console.log("Rejected",error);
        return NextResponse.json({success:false},{status:500})
    }
}