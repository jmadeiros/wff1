// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPIH0RKKAhVLRSCeCv9GhUoWjKMP_IAYw",
  authDomain: "womensfaithforum-d7bab.firebaseapp.com",
  projectId: "womensfaithforum-d7bab",
  storageBucket: "womensfaithforum-d7bab.firebasestorage.app",
  messagingSenderId: "894971215115",
  appId: "1:894971215115:web:2ad49d786455bee394360e",
  measurementId: "G-08SJHXMR4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Only initialize analytics in browser environment
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics }; 