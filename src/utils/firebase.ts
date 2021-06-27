import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpLYb2KCqNPWZN-8GeQvAc7RNrd-xQc5c",
  authDomain: "portfolio-a03ed.firebaseapp.com",
  databaseURL: "https://portfolio-a03ed.firebaseio.com",
  projectId: "portfolio-a03ed",
  storageBucket: "portfolio-a03ed.appspot.com",
  messagingSenderId: "1077175263950",
  appId: "1:1077175263950:web:778b17c41d11a1e665669f",
  measurementId: "G-C8XHCVV4ST",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, auth, timestamp, firebase };
