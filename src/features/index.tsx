/* eslint-disable no-param-reassign */
import { initialPost, Post } from "datas/post";
import { Factor } from "datas/factors";
import { Support } from "datas/support";
import { Umamusume } from "datas/umamusume";
import collectionName from "datas/constants";
import { db } from "firebaseDb";
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import produce from "immer";

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
  setDbData: (
    state: DbState,
    {
      payload,
    }: PayloadAction<{
      key: keyof typeof collectionName;
      value: Factor[] | Umamusume[] | Post[] | Support[];
    }>
  ) => void;
  postInitialized: (state: DbState) => void;
  postUpdated: (state: DbState, { payload }: PayloadAction<Post>) => void;
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

  reducers: {
    setDbData: (state, { payload }) => ({
      ...state,
      db: {
        ...state.db,
        [payload.key]: payload.value,
      },
    }),
    postInitialized: (state) => {
      state.post = initialPost;
    },
    postUpdated: (state, { payload }) => {
      return { ...state, post: payload };
    },
  },
});
