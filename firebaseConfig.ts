// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf6WoHK-dHnNmOQ6ak_6F8mT2pkidPxBU",
  authDomain: "holbegram-47eca.firebaseapp.com",
  projectId: "holbegram-47eca",
  storageBucket: "holbegram-47eca.appspot.com",
  messagingSenderId: "350516550277",
  appId: "1:350516550277:web:c34089ba356b61e4ece7ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialise Auth
export const auth = initializeAuth(app);

// Initialize Storage
export const storage = getStorage(app);

// Initialize FireStore
export const db = getFirestore(app);
