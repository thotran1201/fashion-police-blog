// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
// import {
//   getAuth,
//   onAuthStateChanged,
//   signInAnonymously,
//   signOut,
// } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCp_BIagGmsvFiCV43sdmq70fCt4Jj0DpM",
//     authDomain: "fashion-police-blog.firebaseapp.com",
//     databaseURL: "https://fashion-police-blog-default-rtdb.firebaseio.com",
//     projectId: "fashion-police-blog",
//     storageBucket: "fashion-police-blog.appspot.com",
//     messagingSenderId: "1083912907964",
//     appId: "1:1083912907964:web:c00186a3f5da8715b774b9",
//     measurementId: "G-G6EF2R0S6H"
// };

// const app = initializeApp(firebaseConfig);

// const auth = getAuth();

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log("user");
//   } else {
//     console.log("no user");
//   }
// });

// function signInAnon(e) {
//   e.preventDefault();
//   console.log("sign in");
//   signInAnonymously(auth)
//     .then(() => {
//       console.log("signed in");
//     })
//     .catch((error) => {
//       console.log(error.code, error.message);
//     });
// }

// function signUserOut() {
//   signOut(auth)
//     .then(() => {
//       console.log("You are now logged out");
//     })
//     .catch((error) => {
//       console.log(error.code);
//     });
//   console.log("click");
// }

// var signInAnonBtn = document.getElementById("signInAnon");
// signInAnonBtn.addEventListener("click", signInAnon);

// var signOutAnonBtn = document.getElementById("signOut");
// signOutAnonBtn.addEventListener("click", signUserOut);
