// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOxosrDWhrvNzIIkQIow3d66z9zekNnsQ",
  authDomain: "disneyplus-clone-70232.firebaseapp.com",
  projectId: "disneyplus-clone-70232",
  storageBucket: "disneyplus-clone-70232.appspot.com",
  messagingSenderId: "993311298798",
  appId: "1:993311298798:web:f4e69dfeb585ee69ef4fff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { app, auth, storage, provider };
export default db;