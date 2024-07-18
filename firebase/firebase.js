import { initFirestore } from "@auth/firebase-adapter";
import admin from "firebase-admin";

let app;

if (!admin.app.length) {
  app = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
      clientEmail: process.env.AUTH_FIREBASE_PROJECT_ID,
      privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY,
    }),
  });
}
export const adminDb = initFirestore({
  credential: admin.credential.cert({
    projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
    clientEmail: process.env.AUTH_FIREBASE_PROJECT_ID,
    privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY,
  }),
});

export const adminAuth = admin.auth(app);
