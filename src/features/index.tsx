/* eslint-disable no-param-reassign */
import { Factor, Umamusume, Support, constantsKeys, Post } from "datas";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Db = {
  posts: Post[];
  factors: Factor[];
  supports: Support[];
  umamusumes: Umamusume[];
};
type Reducer = {
  setDbData: (
    state: Db,
    {
      payload,
    }: PayloadAction<{
      key: constantsKeys;
      value: Factor[] | Umamusume[] | Post[] | Support[];
    }>
  ) => void;
};

// immerはredux toolkitに同梱されているはずだが、動いてくれない
// stateの型がwritabledraftになっていないことが原因か？
export const dbSlice = createSlice<Db, Reducer>({
  name: "db",
  initialState: {
    posts: [],
    factors: [],
    supports: [],
    umamusumes: [],
  },

  reducers: {
    setDbData: (state, { payload }) => ({
      ...state,
      [payload.key]: payload.value,
    }),
  },
});
