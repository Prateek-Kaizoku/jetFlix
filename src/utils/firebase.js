// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB_9akzOGyw0WyTp-5tbBI6qxrO67hOYA",
  authDomain: "netflixgpt-4d7bc.firebaseapp.com",
  projectId: "netflixgpt-4d7bc",
  storageBucket: "netflixgpt-4d7bc.appspot.com",
  messagingSenderId: "147909868603",
  appId: "1:147909868603:web:ec038a5fc6de21c2fdf01e",
  measurementId: "G-H3KG3W2NK0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
