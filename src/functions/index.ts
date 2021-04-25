import { Post } from "datas/post";
import { constants, constantValues } from "datas/constants";
import { db, getImgUrl } from "firebaseDb";

export const upload = (collection: string, record: Post) => {
  const ref = db.collection(collection);
  switch (collection) {
    case constants.posts: {
      const docs: Required<Post> = {
        ...record,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      ref.doc(docs.trainerId).set(docs);
      return;
    }

    default: {
      throw new Error("specify target collection");
    }
  }
};

export const fetchDbData = (
  collection: constantValues,
  setState: React.Dispatch<React.SetStateAction<any[]>>
) => {
  const ref = db.collection(collection);
  ref.get().then((snapshot) => {
    const newState: any[] = [];
    snapshot.forEach((doc) => {
      const id = doc.data().id;
      console.log();

      if (collection === "umamusumes" || collection === "supportCards") {
        const promise = () =>
          new Promise((resolve, reject) => {
            const imgUrl = getImgUrl(collection, id);
            resolve(imgUrl);
          });
        promise().then((imgUrl) => {
          newState.push({ ...doc.data(), imgUrl });
        });
      } else {
        newState.push(doc.data());
      }
    });
    setState(newState);
  });
};
