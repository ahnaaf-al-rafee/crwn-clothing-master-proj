import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD1CYw1PvzYgDzqio5nSHaBi9BoI6wAio0",
  authDomain: "crown-db-ca4bc.firebaseapp.com",
  databaseURL: "https://crown-db-ca4bc.firebaseio.com",
  projectId: "crown-db-ca4bc",
  storageBucket: "crown-db-ca4bc.appspot.com",
  messagingSenderId: "438736902426",
  appId: "1:438736902426:web:a77a0427ab5709528d34a3",
  measurementId: "G-SHB15BCC58",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
