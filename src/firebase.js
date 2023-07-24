// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtiyVQ5XUt5_F5FHDpFEDn-Xo7Fbrj0jA",
    authDomain: "angela-fd59b.firebaseapp.com",
    projectId: "angela-fd59b",
    storageBucket: "angela-fd59b.appspot.com",
    messagingSenderId: "41540964836",
    appId: "1:41540964836:web:b17e0e76b56b7f246d37f1",
    measurementId: "G-HQ0BWEEEGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);