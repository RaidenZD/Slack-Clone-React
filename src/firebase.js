import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnBBw1oGDiqdeGAMcgxfaZVR0gd4uqRjs",
  authDomain: "slack-raiden.firebaseapp.com",
  projectId: "slack-raiden",
  storageBucket: "slack-raiden.appspot.com",
  messagingSenderId: "672196089094",
  appId: "1:672196089094:web:94f5d13f82c99c97813a87",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
