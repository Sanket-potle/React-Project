import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
// import UserNameSlice from "./UserNameSlice";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    // ReactProject: UserNameSlice,
  },
});
