import { useEffect, useState } from "react";
import constants from "datas/constants";
import { Post } from "datas/post";
import { Support } from "datas/support";
import { Umamusume } from "datas/umamusume";
import { db } from "firebaseDb";

export type valueOf<T> = T[keyof T];
type Values = Post[] | Support[] | Umamusume[] | Post[];
export const useGetDbDatas = (
  collection: valueOf<typeof constants>
): Values => {
  const [values, setValues] = useState<Values>([]);

  useEffect(() => {
    const load = () => {
      const ref = db.collection(collection);
      ref.get().then((snapshot) => {
        const newState: any[] = [];
        snapshot.forEach((doc) => {
          newState.push(doc.data());
        });
        setValues(newState);
      });
    };
    load();
  });

  return values;
};
