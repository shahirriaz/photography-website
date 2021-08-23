import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyATjniezrVtnwSa1YX54IoynHdgy8z4ml0",
  authDomain: "photography-5b191.firebaseapp.com",
  projectId: "photography-5b191",
  storageBucket: "photography-5b191.appspot.com",
  messagingSenderId: "26714082695",
  appId: "1:26714082695:web:b520d63edcc0ddb1215722",
  measurementId: "G-DDTXP1ZHXT",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
// const fieldValue = firebase.firestore.FieldValue;

export default db;
