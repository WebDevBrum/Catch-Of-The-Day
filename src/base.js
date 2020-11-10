import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCU7TFKZJK1658dSYBE91k11PGspabCZ_k",
  authDomain: "catch-of-the-day-scott-davies.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-scott-davies.firebaseio.com",
  // projectId: "catch-of-the-day-scott-davies",
  // storageBucket: "catch-of-the-day-scott-davies.appspot.com",
  // messagingSenderId: "759287310502",
  // appId: "1:759287310502:web:e0442a34fddba78d6c2c67",
  // measurementId: "G-F5LPB50JRJ",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
