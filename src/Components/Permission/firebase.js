// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL51gGT370J4VazNE4MNkHTCvZ0mX8Swc",
  authDomain: "permitportal-9fc39.firebaseapp.com",
  projectId: "permitportal-9fc39",
  storageBucket: "permitportal-9fc39.appspot.com",
  messagingSenderId: "902525844481",
  appId: "1:902525844481:web:1134bb1cad3eae782a1400",
  measurementId: "G-BE7JBZSGTN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
