import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

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
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const db = getFirestore(app);

// export const collection;
// export const getDocs;

export const collectionFromDB = collection;
export const getDocsFromDB = getDocs;
export const setFromDB = setDoc;
export const docFromDB = doc;
export const deleteDocFromDB = deleteDoc;

export default db;

var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var login = document.getElementById("login");

if (login) {
  login.addEventListener("click", function (e) {
    //console.log(emailInput.value);
    e.preventDefault();
    //  createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    //    .then((userCredential) => {
    //      // Signed in
    //      const user = userCredential.user;
    //      console.log(user);
    //      // ...
    //    })
    //    .catch((error) => {
    //      const errorCode = error.code;
    //      const errorMessage = error.message;
    //      console.log(errorCode);
    //      console.log(errorMessage);
    //      // ..
    //    });

    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/firebase.User
    //     const uid = user.uid;
    //     // ...
    //   } else {
    //     // User is signed out
    //     // ...
    //   }
    // });

    signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        sessionStorage.setItem("user", JSON.stringify(user));

        window.location.href = `https://us-central1-photography-5b191.cloudfunctions.net/api/admin/${user.refreshToken}`;
        // window.location.href = ` http://localhost:5001/photography-5b191/us-central1/api/admin/${user.refreshToken}`;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });
}
