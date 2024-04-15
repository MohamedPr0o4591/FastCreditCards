import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage"; // استيراد حزمة Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyDACLWDIrWnARGRPaaFqoi0Que6Vnr8n9E",
  authDomain: "fastcreditcards.firebaseapp.com",
  projectId: "fastcreditcards",
  storageBucket: "fastcreditcards.appspot.com",
  messagingSenderId: "786970228931",
  appId: "1:786970228931:web:b45d5beee4ddab5b6e0a76",
  measurementId: "G-2ZVXCG06CY",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage(); // إضافة Firebase Storage
