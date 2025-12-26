// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLum_qJSGi3DDLsixzLqt00T63qO3u7bg",
  authDomain: "netflixai-ac47a.firebaseapp.com",
  projectId: "netflixai-ac47a",
  storageBucket: "netflixai-ac47a.firebasestorage.app",
  messagingSenderId: "353488463934",
  appId: "1:353488463934:web:8839a52d2adcb795e3496f",
  measurementId: "G-ZYNQRD73DY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export {auth};