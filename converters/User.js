import { firestoreDb } from "@/lib/firebaseConfig"
import { collection, query, where } from "firebase/firestore"

const userConverter= {
    toFirestore: function (customer){
        return{
            email:customer.email,
            image:customer.image,
            name:customer.name
        }
    },
    fromFirestore: function(snapshot,options){
        const data = snapshot.data(options)
        return{
            id:snapshot.id,
            email:data.email,
            image:data.image,
            name:data.name
        }
    }
}

export const getUserByEmailRef = (email) =>
    query(collection(firestoreDb,"users"),where("email","==",email)).withConverter(userConverter)