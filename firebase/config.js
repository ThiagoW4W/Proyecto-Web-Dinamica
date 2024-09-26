// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEE3KOIuEtrrMMS4xjZeJMVa_NjFwRYDU",
  authDomain: "web-estatica-f0b87.firebaseapp.com",
  projectId: "web-estatica-f0b87",
  storageBucket: "web-estatica-f0b87.appspot.com",
  messagingSenderId: "600729283657",
  appId: "1:600729283657:web:6bfe73aaa7c7a17a696398",
  measurementId: "G-S99E4FHC9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app);