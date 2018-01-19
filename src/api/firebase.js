import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCN0XwOwr3rvizQQ-tNzbCau8TsjohgO9U",
  authDomain: "fir-testing-28359.firebaseapp.com",
  databaseURL: "https://fir-testing-28359.firebaseio.com",
  projectId: "fir-testing-28359",
  storageBucket: "fir-testing-28359.appspot.com",
  messagingSenderId: "918899815279"
};
export const firebase_api = firebase.initializeApp(config);
