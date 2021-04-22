/* eslint-disable no-param-reassign */
import {
  Factor,
  Umamusume,
  Support,
  constantsKeys,
  initialPost,
  Post,
} from "datas";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Db = {
  posts: Post[];
  factors: Factor[];
  supports: Support[];
  umamusumes: Umamusume[];
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
      key: constantsKeys;
      value: Factor[] | Umamusume[] | Post[] | Support[];
    }>
  ) => void;
  postInitialized: (state: DbState) => void;
};

// immerはredux toolkitに同梱されているはずだが、動いてくれない
// stateの型がwritabledraftになっていないことが原因か？
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
  },
});
