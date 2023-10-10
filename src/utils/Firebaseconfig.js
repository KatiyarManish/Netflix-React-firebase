// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARGCp981nahN1mnjK72anmUKv3u94rKIs",
  authDomain: "netflix-3fea7.firebaseapp.com",
  projectId: "netflix-3fea7",
  storageBucket: "netflix-3fea7.appspot.com",
  messagingSenderId: "205106344685",
  appId: "1:205106344685:web:dfd97bcb3a4910a1a212e4",
  measurementId: "G-NF1Y0EGJ7T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
