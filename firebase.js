// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0bz3ebac-mVqvmgnPDGVUOp0IBxpoYrw",
  authDomain: "my-project-d0a38.firebaseapp.com",
  projectId: "my-project-d0a38",
  storageBucket: "my-project-d0a38.firebasestorage.app",
  messagingSenderId: "770032493887",
  appId: "1:770032493887:web:85b52bf2e8937077af1f8a",
  measurementId: "G-CTMGF49VW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);