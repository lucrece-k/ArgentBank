import { configureStore } from "@reduxjs/toolkit";
import { userNameSlice } from "../redux/userNameSlice";
import { connectSlice } from "../redux/connectSlice";

const store = configureStore({
  reducer: {
    username: userNameSlice.reducer,
    connect: connectSlice.reducer,
  },
});
export default store;
