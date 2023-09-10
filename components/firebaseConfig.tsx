// Import the functions you need from the SDKs you need
import { initializeApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNsyU3HMq_sqlnYjAOmdMgpcleoJ3Ssa8",
  authDomain: "stato-sphere.firebaseapp.com",
  projectId: "stato-sphere",
  storageBucket: "stato-sphere.appspot.com",
  messagingSenderId: "908842232221",
  appId: "1:908842232221:web:4b5effa6e8b7dd325a6774",
  measurementId: "G-DB17PE1LLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app