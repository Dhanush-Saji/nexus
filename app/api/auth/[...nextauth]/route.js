import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { adminAuth, adminDb } from "@/firebase/firebase";

export const authOptions = {
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
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        if (token.sub) {
          session.user.id = token.sub;
          // This helps to create to put entry in firebase database
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
  session: {
    strategy: "jwt",
  },
  adapter: FirestoreAdapter(adminDb),
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
