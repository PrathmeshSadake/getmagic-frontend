// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth'
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrmYoZXiIwroQNhVwInV_X4G_eYYlf4Vk",
  authDomain: "getmagic-fe.firebaseapp.com",
  projectId: "getmagic-fe",
  storageBucket: "getmagic-fe.appspot.com",
  messagingSenderId: "324734552886",
  appId: "1:324734552886:web:3fd69a723a20500d6cc197",
  measurementId: "G-G55CJHDQQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
// const analytics = getAnalytics(app);