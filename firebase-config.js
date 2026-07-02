// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhaBjgOkKbSGTyQBiLxMg-xkBfZkYP3sE",
  authDomain: "tapcontrol-pa20393.firebaseapp.com",
  projectId: "tapcontrol-pa20393",
  storageBucket: "tapcontrol-pa20393.firebasestorage.app",
  messagingSenderId: "98827069389",
  appId: "1:98827069389:web:7e3854ba6fd90bc7700684",
  measurementId: "G-W4MD2RP6TK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

