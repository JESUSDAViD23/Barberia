importScripts('https://www.gstatic.com/firebasejs/10.5.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.5.2/firebase-messaging-compat.js');
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCtMhxZS8JUjl8FEBfeQS4sGsrWajGyOv8",
    authDomain: "mensaje-pw.firebaseapp.com",
    projectId: "mensaje-pw",
    storageBucket: "mensaje-pw.appspot.com",
    messagingSenderId: "943944107917",
    appId: "1:943944107917:web:c2c2c645ad8d6135791fc4",
    measurementId: "G-SM20CR4QEP"
};



const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(payload => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/public/icon-192x192.png"
    }

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    )
})