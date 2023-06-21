
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsCsysrufe8qqxoeOe7F77xP4iz04R7gM",
  authDomain: "mundomotose.firebaseapp.com",
  projectId: "mundomotose",
  storageBucket: "mundomotose.appspot.com",
  messagingSenderId: "724812570479",
  appId: "1:724812570479:web:03ae6d0b39418f0252129a",
  measurementId: "G-NVY7J4KFGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)