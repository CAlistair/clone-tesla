
import firebase from "firebase/compat/app";
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDeibWwoRHR6w8RFN5DUR5lyoP2yKJbhoE",
  authDomain: "clone-tesla-af2f4.firebaseapp.com",
  projectId: "clone-tesla-af2f4",
  storageBucket: "clone-tesla-af2f4.appspot.com",
  messagingSenderId: "968846797371",
  appId: "1:968846797371:web:1146b57166b63440e88a1e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }