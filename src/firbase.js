// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBNwQW3jO9lpzMPxz5Mpu0pyZvfDqrJ2uE",
  authDomain: "slack-clone-yt-be1d3.firebaseapp.com",
  projectId: "slack-clone-yt-be1d3",
  storageBucket: "slack-clone-yt-be1d3.appspot.com",
  messagingSenderId: "467449401012",
  appId: "1:467449401012:web:9b748f56e6d1fab95d91e1",
  measurementId: "G-02077R7496"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};
