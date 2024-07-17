import {getApp, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: "nexus-98342.firebaseapp.com",
    projectId: "nexus-98342",
    storageBucket: "nexus-98342.appspot.com",
    messagingSenderId: "185098969110",
    appId: "1:185098969110:web:f70b192dcb9bf93e731537",
    measurementId: "G-7XX67K9MML"
};

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)
const auth = getAuth(app)

export {firestore, auth,app}