'use client'
import { auth } from '@/lib/firebaseConfig';
import { signInWithCustomToken } from 'firebase/auth';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react'

const FirebaseAuthProvider = ({children}) => {
    const { data: session } = useSession();
  const syncFirebaseAuth = async (session) => {
    if (session && session.firebaseToken) {
      try {
        await signInWithCustomToken(auth, session.firebaseToken);
      } catch (error) {
        console.log(error);
      }
    } else {
      auth.signOut();
    }
  };
  useEffect(() => {
    if (!session) return;
    syncFirebaseAuth(session);
  }, [session]);
  return children
}

export default FirebaseAuthProvider