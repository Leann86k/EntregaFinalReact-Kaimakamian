// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-e0CXlPumWoFmffXD07V6nM9EIfLabXo",
  authDomain: "ecojardin-ae4eb.firebaseapp.com",
  projectId: "ecojardin-ae4eb",
  storageBucket: "ecojardin-ae4eb.firebasestorage.app",
  messagingSenderId: "173475926287",
  appId: "1:173475926287:web:4945173ccbddcaf65f6e7a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
