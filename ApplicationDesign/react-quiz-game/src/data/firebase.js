// Brings in the core functionality:
import firebase from "firebase/app";
// Brings in the firestore functionality:
import "firebase/firestore";

// TODO: this shouldn't be directly in our source code. We don't want to commit
// this to GitHub.
const firebaseConfig = {
  apiKey: "AIzaSyBveXDrzWm3vo7v_LCCXwXo9jX9J323JMI",
  authDomain: "fir-test-6960d.firebaseapp.com",
  projectId: "fir-test-6960d",
  storageBucket: "fir-test-6960d.appspot.com",
  messagingSenderId: "814442488335",
  appId: "1:814442488335:web:b66f30ce26f0388bbcb97a",
  measurementId: "G-X68RBS1VGM",
};

// To help us with debugging later!
if (!firebaseConfig.apiKey)
  throw new Error("Missing firebase credential: apiKey");
if (!firebaseConfig.authDomain)
  throw new Error("Missing firebase credential: authDomain");
if (!firebaseConfig.projectId)
  throw new Error("Missing firebase credential: projectId");
if (!firebaseConfig.storageBucket)
  throw new Error("Missing firebase credential: storageBucket");
if (!firebaseConfig.messagingSenderId)
  throw new Error("Missing firebase credential: messagingSenderId");
if (!firebaseConfig.appId)
  throw new Error("Missing firebase credential: appId");
if (!firebaseConfig.measurementId)
  throw new Error("Missing firebase credential: measurementId");

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };
