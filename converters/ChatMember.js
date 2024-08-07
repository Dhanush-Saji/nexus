import { firestoreDb } from "@/lib/firebaseConfig";
import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions, collection, collectionGroup, doc, query, where } from "firebase/firestore";

const chatMembersConverter = {
    toFirestore: function(member){
        return {
            userId:member.userId,
            name:member.name,
            email:member.email,
            timestamp: member.timestamp,
            isAdmin:member.isAdmin,
            chatId:member.chatId,
            image:member.image
        }
    },
    fromFirestore: function(snapshot,options){
        const data = snapshot.data(options);
        return {
            userId:snapshot.id,
            name:data.name,
            email:data.email,
            timestamp: data.timestamp,
            isAdmin:data.isAdmin,
            chatId:data.chatId,
            image:data.image
        }
    }
}
export const addChatRef = (chatId,userId) =>doc(firestoreDb,'chats',chatId,'members',userId).withConverter(chatMembersConverter)
export const chatMembersAdminRef = (chatId) =>
    query(
        collection(firestoreDb,'chats',chatId,'members'),
        where("isAdmin","==",true)
    ).withConverter(chatMembersConverter)
export const chatMemberCollectionGroupRef = (userId) =>query(collectionGroup(firestoreDb,'members'),where("userId","==",userId)).withConverter(chatMembersConverter)
export const chatMembersRef = (chatId) =>collection(firestoreDb,'chats',chatId,'members').withConverter(chatMembersConverter)