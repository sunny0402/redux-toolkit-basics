import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "name autho 1" },
  { id: "2", name: "name author 2" },
];

const postsSlice = createSlice({
  name: "name",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default postsSlice.reducer;
