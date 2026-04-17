// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMaCXtT-NG7h5jajGDC-GsF1jdtNrr52U",
  authDomain: "reedin-fashion.firebaseapp.com",
  projectId: "reedin-fashion",
  storageBucket: "reedin-fashion.firebasestorage.app",
  messagingSenderId: "1029965126580",
  appId: "1:1029965126580:web:dc7b24db429e5d807230e1",
  measurementId: "G-8D65KS8WVN",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth, analytics};
