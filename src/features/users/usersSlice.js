import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Elena Park" },
  { id: "1", name: "SungJi Park" },
  { id: "2", name: "HanSook Ko" },
  { id: "3", name: "SoonIl Park" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
