import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);
export default firebase;
export const db = firebase.firestore();

export const getImgUrl = (index: string, id: string) => {
  // Create a reference with an initial file path and name
  const storage = firebase.storage();
  const pathReference = storage.ref(`${index}/${id}.png`);
  pathReference
    .getDownloadURL()
    .then((url) => {
      // This can be downloaded directly:
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open("GET", url);
      xhr.send();

      // Or inserted into an <img> element:
      const img = document.getElementById("myimg");
      return url;
    })
    .catch((error) => {
      // Handle any errors
    });
};
