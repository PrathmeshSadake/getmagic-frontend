import { initializeApp } from "firebase/app";
import 'firebase/auth'
import { getAuth } from "firebase/auth";
import {getFirestore, doc} from "firebase/firestore"

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
export const db = getFirestore()
export const auth = getAuth()