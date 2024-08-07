import { firestoreDb } from "@/lib/firebaseConfig";
import { collection, limit, orderBy, query } from "firebase/firestore";

const messageConverter  = {
    toFirestore: function(message){
        return {
            input:message.input,
            user_language: message.user_language || '',
            timestamp: message.timestamp,
            user:message.user,
        }
    },
    fromFirestore: function(snapshot,options){
        const data = snapshot.data(options);
        return {
            id:snapshot.id,
            input:data.input,
            user_language: data.user_language || '',
            timestamp: data.timestamp?.toDate(),
            user:data.user,
            translated:data.translated
        }
    }
}

export const messageRef = (chatId) =>
    collection(firestoreDb,'chats',chatId,'messages').withConverter(messageConverter)


export const limitedSortedMessageRef = (chatId) =>
    query(query(messageRef(chatId),limit(1)),orderBy('timestamp','desc'))

export const sortedMessageRef = (chatId) =>
    query(messageRef(chatId),orderBy('timestamp','asc'))