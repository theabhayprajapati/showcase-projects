// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBAES_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: "socialconnect-e4cdf",
    storageBucket: "socialconnect-e4cdf.appspot.com",
    messagingSenderId: "572770083866",
    appId: process.env.APP_ID
};

// Initialize Firebase
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore()

const storage = getStorage()

export { app, db, storage }
