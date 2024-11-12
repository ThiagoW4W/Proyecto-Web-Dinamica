// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
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


let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
} catch (error) {
  if (error.code !== 'auth/already-initialized') {
    throw error; 
  }

  auth = getAuth(app);
}

export { auth };
// Establece la persistencia
