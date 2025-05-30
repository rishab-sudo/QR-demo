import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import navReducer from "./navSlice";



export default configureStore({
  reducer: {
    cart: cartReducer,
    nav: navReducer,
  },
});

// redux/cartSlice.js
