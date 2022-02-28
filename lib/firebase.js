import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzlbUlvQ51RM3b3pfsg1PTFJiqUI7nmhM",
  authDomain: "netflix-build-swann.firebaseapp.com",
  projectId: "netflix-build-swann",
  storageBucket: "netflix-build-swann.appspot.com",
  messagingSenderId: "241465940860",
  appId: "1:241465940860:web:03d0a38ed9699c4aa762f9"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const auth = getAuth();

export { app, db, auth };
