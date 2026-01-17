import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

// 👇 PUNE DATELE REALE AICI (doar pentru test)
const firebaseConfig = {
    apiKey: "AIzaSyB2dHrnOhWlQqadhSNc9ZKgfoR0aPIgEeg",
    authDomain: "shop-chat-2aab3.firebaseapp.com",
    projectId: "shop-chat-2aab3",
    storageBucket: "shop-chat-2aab3.firebasestorage.app",
    messagingSenderId: "211691643952",
    appId: "1:211691643952:web:ef0146161454e098bc79f5"
};
const app = initializeApp(firebaseConfig);

// Păstrăm setarea pentru conexiune stabilă
export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

console.log("Firebase conectat la proiectul:", firebaseConfig.projectId);