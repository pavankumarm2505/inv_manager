// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYMpHq3a_K8AUdkqb4mQvFnXaBKd_o8QY",
  authDomain: "inv-manager-ad6c5.firebaseapp.com",
  projectId: "inv-manager-ad6c5",
  storageBucket: "inv-manager-ad6c5.appspot.com",
  messagingSenderId: "122731941216",
  appId: "1:122731941216:web:ff500640033d0d5abea205",
  measurementId: "G-622H8EE12C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
export {firestore};//is the semicolon needed?
