import { configureStore } from "@reduxjs/toolkit";
import { userNameSlice } from "../redux/userNameSlice";

const store = configureStore({
  reducer: {
    usernames: userNameSlice.reducer,
  },
});
export default store;
