import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhvsr1kBUh1nP4rmbhWfNQSKHQrQoxkqw",
  authDomain: "wexp-f4f9a.firebaseapp.com",
  projectId: "wexp-f4f9a",
  storageBucket: "wexp-f4f9a.appspot.com",
  messagingSenderId: "152298580148",
  appId: "1:152298580148:web:879f4d3a293071559a4fe1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
