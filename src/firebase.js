// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getMessaging} from "firebase/messaging"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtMhxZS8JUjl8FEBfeQS4sGsrWajGyOv8",
  authDomain: "mensaje-pw.firebaseapp.com",
  projectId: "mensaje-pw",
  storageBucket: "mensaje-pw.appspot.com",
  messagingSenderId: "943944107917",
  appId: "1:943944107917:web:c2c2c645ad8d6135791fc4",
  measurementId: "G-SM20CR4QEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = getMessaging(app);