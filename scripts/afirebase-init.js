// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-analytics.js";
import { getFirestore, collection, addDoc, deleteDoc, getDocs, doc, Timestamp, onSnapshot, query, where, orderBy } 
from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCTrOcW_LAGc0mel65TLwEtLYnbnElbqNw",
    authDomain: "ninja-chat-ebee0.firebaseapp.com",
    projectId: "ninja-chat-ebee0",
    storageBucket: "ninja-chat-ebee0.firebasestorage.app",
    messagingSenderId: "337708825698",
    appId: "1:337708825698:web:102ac0e8ab1a68e424253b",
    measurementId: "G-B8X8Y9WRT6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export { getFirestore, collection, addDoc, deleteDoc, getDocs, doc, Timestamp, onSnapshot, query, where, orderBy }

