// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDGoxa6WwYjPmMGKQl6hSxdUu78ijVGKSg",
  authDomain: "projeto1-24be5.firebaseapp.com",
  projectId: "projeto1-24be5",
  storageBucket: "projeto1-24be5.appspot.com",
  messagingSenderId: "631995217153",
  appId: "1:631995217153:web:9d5b04bc2cd9adf2891700",
  measurementId: "G-G96R0612VW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const Auth = getAuth(app)

export {db, Auth};