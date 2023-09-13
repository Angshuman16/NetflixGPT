
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfz6dRD7lDVphh9Y9CgFtqH8N6i6MKK7w",
  authDomain: "netflixgpt-7c1b2.firebaseapp.com",
  projectId: "netflixgpt-7c1b2",
  storageBucket: "netflixgpt-7c1b2.appspot.com",
  messagingSenderId: "214742728833",
  appId: "1:214742728833:web:55d0a5fb108ce18ac18d80",
  measurementId: "G-P8TR3BMVLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();