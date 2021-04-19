/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post, initialPost } from "datas/post";

export type PostState = {
  post: Post;
};
type ValueOf<T> = T[keyof T];
export type updatedArgument = {
  index1: keyof Post;
  index2?: string;
  value: any;
};
export const postSlice = createSlice({
  name: "post",
  initialState: { post: initialPost },
  // reduxにはデフォルトでimmer.jsが組み込まれている
  reducers: {
    postInitialized: (state) => {
      state.post = initialPost;
    },
    postUpdated: (state, action: PayloadAction<updatedArgument>) => {
      const { index1, index2 = false } = action.payload;
      switch (index1) {
        case "mom" || "grandMom1" || "grandMom2":
          switch (index2) {
            case "factorIds":
              state.post[index1].factorIds = action.payload.value;
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
