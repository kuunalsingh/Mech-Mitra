import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJ0gmZagLX7WVckE3qN3iMxo5hn6W9IIM",
  authDomain: "mech-mitra-38a35.firebaseapp.com",
  projectId: "mech-mitra-38a35",
  storageBucket: "mech-mitra-38a35.appspot.com",
  messagingSenderId: "264630360627",
  appId: "1:264630360627:web:d94b0460366d9c4daba146",
  measurementId: "G-WL8RMCRN4V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
