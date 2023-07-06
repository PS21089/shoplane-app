import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../redux/reducers/cartSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});
