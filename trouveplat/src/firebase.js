// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
   apiKey: "AIzaSyC3eMfayvf2MkRpZRZXUa06wkrsefXw8pM",
  authDomain: "testfirebase-a2d93.firebaseapp.com",
  databaseURL: "https://testfirebase-a2d93-default-rtdb.firebaseio.com",
  projectId: "testfirebase-a2d93",
  storageBucket: "testfirebase-a2d93.firebasestorage.app",
  messagingSenderId: "1048067427587",
  appId: "1:1048067427587:web:b521bb1ba9573cc97eed36",
  measurementId: "G-BM8XM28NQG"
};

// Initialise Firebase
const app = initializeApp(firebaseConfig);

// Authentification
export const auth = getAuth(app);

// Firestore
export const db = getFirestore(app);

// ✅ Realtime Database
export const database = getDatabase(app);