import { createSlice } from "@reduxjs/toolkit";
export const connectSlice = createSlice({
  name: "connect",
  initialState: {
    firstName: "",
    lastName: "",
  },
  reducers: {
    addfirstName: (state, action) => {
      state.firstName = action.payload;
    },
    addlastName: (state, action) => {
      state.lastName = action.payload;
    },
  },
});
