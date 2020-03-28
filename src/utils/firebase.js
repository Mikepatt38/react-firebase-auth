import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyA8bvNDGlfeaYsx7_g4-J8xMYvwH3RMr9c",
  authDomain: "react-a-6f6c4.firebaseapp.com",
  databaseURL: "https://react-a-6f6c4.firebaseio.com",
  projectId: "react-a-6f6c4",
  storageBucket: "react-a-6f6c4.appspot.com",
  messagingSenderId: "277967927963",
  appId: "1:277967927963:web:4b9b7af8c71913ebabe43e",
  measurementId: "G-SMNBBMHFW5"
})

const database = firebase.firestore();
const auth = firebase.auth();

export { firebase, database, auth };