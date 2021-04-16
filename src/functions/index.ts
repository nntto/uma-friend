import { Post } from "datas/post";
import { Factor } from "datas/factors";
import { Support } from "datas/support";
import { Umamusume } from "datas/umamusume";
import collectionName from "datas/constants";

import { db } from "firebaseDb";

export const upload = (collection: string, record: Post) => {
  const ref = db.collection(collection);
  switch (collection) {
    case collectionName.posts: {
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

type ValueOf<T> = T[keyof T];
export const fetchDbData = (
  collection: ValueOf<typeof collectionName>,
  setState: React.Dispatch<React.SetStateAction<any[]>>
) => {
  const ref = db.collection(collection);
  ref.get().then((snapshot) => {
    const newState: any[] = [];
    snapshot.forEach((doc) => {
      newState.push(doc.data());
    });
    setState(newState);
  });
};
