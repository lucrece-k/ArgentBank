import { createSlice } from "@reduxjs/toolkit";

export const userNameSlice = createSlice({
  name: "username",
  initialState: {
    user: "",
  },
  reducers: {
    updateUserName: (state, action) => {
      state.user = action.payload;
    },
  },
});
