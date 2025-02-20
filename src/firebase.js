// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyDSjAUkOQLWiTsGbTLa1MWcqEuljtBiAZQ",
  authDomain: "weekly-meal-plan-4de4b.firebaseapp.com",
  databaseURL: "https://weekly-meal-plan-4de4b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "weekly-meal-plan-4de4b",
  storageBucket: "weekly-meal-plan-4de4b.firebasestorage.app",
  messagingSenderId: "372272930305",
  appId: "1:372272930305:web:e3ba9dc05040883adb2a00",
  measurementId: "G-Y6GX9073XF"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);