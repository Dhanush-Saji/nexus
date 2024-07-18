import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { FirestoreAdapter, initFirestore } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";
import admin from 'firebase-admin'
import { adminAuth, adminDb } from "@/firebase/firebase";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // CredentialsProvider({
    //     name:"credentials",
    //     async authorize(credentials) {
    //       return await signInWithEmailAndPassword(auth,credentials.email,credentials.password)
    //       .then(userCredential =>{
    //         if (userCredential.user) {
    //           return { id: userCredential.user.uid, email: userCredential.user.email };
    //         }
    //           return null
    //       })
    //       .catch(error =>console.log(error))
    //     },
    // }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      })
  ],
  session: {
    strategy: "jwt",
  },
  adapter: FirestoreAdapter(adminDb),
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        if (token.sub) {
          session.user.id = token.sub;
          const firebaseToken = await adminAuth.createCustomToken(token.sub);
          session.firebaseToken = firebaseToken;
        }
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
}

const handler = NextAuth(authOptions)


export { handler as GET, handler as POST };