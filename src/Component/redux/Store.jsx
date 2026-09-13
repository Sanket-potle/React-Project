import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import UserNameSlice from "./UserNameSlice";
import { ProductsSlice } from "./ProductsSlice";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    user: UserNameSlice,
    product: ProductsSlice,
  },
});
