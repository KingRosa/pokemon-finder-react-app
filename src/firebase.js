// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM6Cj2X7h6SNTPSncQnUtSnrKWdUN7Kvs",
  authDomain: "pokemon-finder-157f4.firebaseapp.com",
  projectId: "pokemon-finder-157f4",
  storageBucket: "pokemon-finder-157f4.firebasestorage.app",
  messagingSenderId: "438904129704",
  appId: "1:438904129704:web:c57fd1e5e62733f03a5a9d",
  measurementId: "G-NSZDH4MCYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
