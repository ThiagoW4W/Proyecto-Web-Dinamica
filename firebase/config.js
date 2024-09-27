// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEE3KOIuEtrrMMS4xjZeJMVa_NjFwRYDU",
  authDomain: "web-estatica-f0b87.firebaseapp.com",
  projectId: "web-estatica-f0b87",
  storageBucket: "web-estatica-f0b87.appspot.com",
  messagingSenderId: "600729283657",
  appId: "1:600729283657:web:6bfe73aaa7c7a17a696398",
  measurementId: "G-S99E4FHC9T"  // Este campo es opcional y se puede eliminar
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
