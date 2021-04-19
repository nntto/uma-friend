/* eslint-disable no-param-reassign */
import { initialPost, Post } from "datas/post";
import { Factor } from "datas/factors";
import { Support } from "datas/support";
import { Umamusume } from "datas/umamusume";
import collectionName from "datas/constants";
import { db } from "firebaseDb";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Db = {
  posts: Post[];
  factors: Factor[];
  supports: Support[];
  umamusumes: Umamusume[];
};
export type updatedPostArgument = {
  index1: keyof Post;
  index2?: string;
  value: any;
};
export type DbState = {
  db: Db;
  post: Post;
};
type Reducer = {
  dbUpdated: (
    state: DbState,
    { payload }: PayloadAction<keyof typeof collectionName>
  ) => void;
  postInitialized: (state: DbState) => void;
  postUpdated: (
    state: DbState,
    { payload }: PayloadAction<updatedPostArgument>
  ) => void;
};

export const dbSlice = createSlice<DbState, Reducer>({
  name: "db",
  initialState: {
    db: {
      posts: [],
      factors: [],
      supports: [],
      umamusumes: [],
    },
    post: initialPost,
  },

  // reduxにはデフォルトでimmer.jsが組み込まれている
  reducers: {
    dbUpdated: (state, { payload }) => {
      const ref = db.collection(collectionName[payload]);
      ref.get().then((snapshot) => {
        const newState: any[] = [];
        snapshot.forEach((doc) => {
          newState.push(doc.data());
        });
      });
      console.log(state);
    },
    postInitialized: (state) => {
      state.post = initialPost;
      console.log(state);
    },
    postUpdated: (state, { payload }) => {
      const { index1, index2 = false } = payload;
      switch (index1) {
        case "mom" || "grandMom1" || "grandMom2":
          switch (index2) {
            case "factorIds":
              state.post[index1].factorIds = payload.value;
              break;
            default:
              throw new Error("Something bad happened");
          }

          break;
        default:
          break;
      }
    },
  },
});
