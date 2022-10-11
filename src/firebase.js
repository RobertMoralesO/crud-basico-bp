// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuPccCF8ydJ7TB4m3GkD72hhOprr5p-qs",
  authDomain: "crud-basico-bp.firebaseapp.com",
  projectId: "crud-basico-bp",
  storageBucket: "crud-basico-bp.appspot.com",
  messagingSenderId: "243285120678",
  appId: "1:243285120678:web:a5d670bda75998593ec667"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}