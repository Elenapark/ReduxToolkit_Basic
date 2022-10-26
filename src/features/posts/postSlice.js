import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "this is redux toolkit contents!",
  },
  {
    id: "2",
    title: "this is post slice file",
    content: "the more I say slice, the more I want pizza🍕",
  },
];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export const selectAllPosts = (state) => state.posts;

export default postSlice.reducer;
