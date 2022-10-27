import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "this is redux toolkit contents!",
    date: sub(new Date(), { minutes: 10 }).toISOString(), // convert to a time stamp string
  },
  {
    id: "2",
    title: "this is post slice file",
    content: "the more I say slice, the more I want pizza🍕",
    date: sub(new Date(), { minutes: 5 }).toISOString(), // convert to a time stamp string
  },
];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
