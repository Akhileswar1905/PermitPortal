import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCBzrE6H6qRvPKfDtdQ_FHaSiGadWmxEhA",
  authDomain: "srp-project-a990e.firebaseapp.com",
  projectId: "srp-project-a990e",
  storageBucket: "srp-project-a990e.appspot.com",
  messagingSenderId: "275785350924",
  appId: "1:275785350924:web:461db9dcf7687edc339329",
  measurementId: "G-Z5P78F370Y",
};

// Initialize Firebase if it hasn't been initialized already
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
