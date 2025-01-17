import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCx5u-jAxCV-rbE56r4_cN9lXmunb-B-CQ",
    authDomain: "busy-buy-de9e5.firebaseapp.com",
    projectId: "busy-buy-de9e5",
    storageBucket: "busy-buy-de9e5.firebasestorage.app",
    messagingSenderId: "759826857740",
    appId: "1:759826857740:web:11b54be0a0e46b563f5329"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;