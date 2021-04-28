import { Post } from "datas/post";
import { constantValues } from "datas/constants";
import { db } from "firebaseDb";
import firebase from "firebase/app";

export const upload = (record: Post) => {
  const ref = db.collection("posts");
  const docs: Required<Post> = {
    ...record,
    updatedAt: firebase.firestore.Timestamp.now(),
  };

  ref.doc(docs.trainerId).set(docs);
};

export const fetchDbData = (
  collection: constantValues,
  setState: React.Dispatch<React.SetStateAction<any[]>>
) => {
  const ref = db.collection(collection);
  ref.get().then((snapshot) => {
    const newState: any[] = [];
    snapshot.forEach((doc) => {
      if (collection === "posts") {
        newState.push({
          ...doc.data(),
          updatedAt: doc.data().updatedAt.toDate().toLocaleString(),
        });
      } else {
        newState.push(doc.data());
      }
    });
    setState(newState);
  });
};
