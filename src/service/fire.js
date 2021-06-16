import firebase from 'firebase/app';
// import fetch from "node-fetch";
// const fetch = require('node-fetch');
var config ={
  apiKey: "AIzaSyD7rj8NP33cBcPNrRe3_hohib6boemsEeg",
  authDomain: "petrol-pump-d070c.firebaseapp.com",
  projectId: "petrol-pump-d070c",
  storageBucket: "petrol-pump-d070c.appspot.com",
  messagingSenderId: "289103591635",
  appId: "1:289103591635:web:09bdaccc92b8d7c94a7c26",
  measurementId: "G-FVS8642R9V"

  };
  if (typeof window !== 'undefined') {
    firebase.initializeApp(config);
  }

  export default firebase;