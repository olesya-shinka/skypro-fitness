//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//TODO: Add SDKs for Firebase products that you want to use
//https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpAXr_TV9wi7lgmJknGGv4bq4CtRpqteQ",
  authDomain: "fitness-pro-d307e.firebaseapp.com",
  projectId: "fitness-pro-d307e",
  storageBucket: "fitness-pro-d307e.appspot.com",
  messagingSenderId: "761578132908",
  appId: "1:761578132908:web:5d3c2c930b42b67b20d609",
  databaseURL:" https://fitness-pro-d307e-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;