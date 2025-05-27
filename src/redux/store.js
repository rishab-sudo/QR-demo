// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import menuReducer from "./menuSlice"; // if applicable

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu: menuReducer
  }
});
