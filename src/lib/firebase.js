
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "matrimony-58714.firebaseapp.com",
  projectId: "matrimony-58714",
  storageBucket: "matrimony-58714.appspot.com",
  messagingSenderId: "183744546441",
  appId: "1:183744546441:web:b2d0d009ca40e091a72858"
};


export const app = initializeApp(firebaseConfig);