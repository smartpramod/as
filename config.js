import firebase from 'firebase';
require('@firebase/firestore')

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAkV8ViN1jqwggPZcjdDTY_XOK9blLKSxA",
    authDomain: "pro71-f5e80.firebaseapp.com",
    databaseURL: "https://pro71-f5e80-default-rtdb.firebaseio.com",
    projectId: "pro71-f5e80",
    storageBucket: "pro71-f5e80.appspot.com",
    messagingSenderId: "865305726587",
    appId: "1:865305726587:web:d4156140722e45f1479cde"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore()