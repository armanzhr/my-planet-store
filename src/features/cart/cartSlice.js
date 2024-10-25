import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      /* Logic to add to cart */
    },
    increment(state, action) {
      /* Logic to increment quantity */
    },
    decrement(state, action) {
      /* Logic to decrement quantity */
    },
    removeFromCart(state, action) {
      /* Logic to remove item */
    },
  },
});

export const { addToCart, increment, decrement, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
