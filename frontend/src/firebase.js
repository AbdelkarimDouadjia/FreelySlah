// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "freelyslah.firebaseapp.com",
  projectId: "freelyslah",
  storageBucket: "freelyslah.appspot.com",
  messagingSenderId: "985664849151",
  appId: "1:985664849151:web:825e8135aab985ef0638ca",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
