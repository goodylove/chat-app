// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFbnx7g9jURhrSyZUr6veloCJ5Do6wRrI",
  authDomain: "chat-2-app-710f0.firebaseapp.com",
  projectId: "chat-2-app-710f0",
  storageBucket: "chat-2-app-710f0.appspot.com",
  messagingSenderId: "530869342960",
  appId: "1:530869342960:web:bb8b9fc1fce97e6883a835",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
