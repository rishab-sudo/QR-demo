// redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    showBottomBar: false,
    showCartModal: false
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.showBottomBar = true;
    },
    increment: (state, action) => {
      const item = state.items.find(item => item.name === action.payload);
      if (item) item.quantity += 1;
    },
    decrement: (state, action) => {
      const item = state.items.find(item => item.name === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
      else state.items = state.items.filter(item => item.name !== action.payload);
    },
    toggleCartModal: (state) => {
      state.showCartModal = !state.showCartModal;
    },
    confirmOrder: (state) => {
      state.items = [];
      state.showBottomBar = false;
      state.showCartModal = false;
    }
  }
});

export const { addToCart, increment, decrement, toggleCartModal, confirmOrder } = cartSlice.actions;
export default cartSlice.reducer;
