import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);
export default firebase;
export const db = firebase.firestore();
