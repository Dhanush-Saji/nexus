import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        name:"credentials",
        credentials:{},
        async authorize(credentials) {
            return await signInWithEmailAndPassword(auth,credentials.email,credentials.password)
            .then(userCredential =>{
                if(userCredential.user){
                    return userCredential.user
                }
                return null
            })
            .catch(error =>console.log(error))
          },
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
  ],pages: {
    signIn: '/login'
  },
  strategy: "jwt",
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
      clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  }),
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST };