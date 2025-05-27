// redux/menuSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    category: "Salads",
    subcategories: [
      { name: "Green Salad", description: "Fresh greens", price: 120, veg: true },
      { name: "Caesar Salad", description: "With dressing", price: 150, veg: false },
    ],
  },
  {
    category: "Breads",
    subcategories: [
      { name: "Butter Naan", description: "Soft with butter", price: 50, veg: true },
      { name: "Garlic Naan", description: "Topped with garlic", price: 60, veg: true },
    ],
  },
];

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {}
});

export default menuSlice.reducer;
