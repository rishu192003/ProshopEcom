import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem("cart") // this specifically stores the state of cart nd if website is closed and then opened then we need to get back the last state which is stored in the local storage . so to understand this we need we need to convert it from string nd parse it as js object nd if nothing is stored then just initalize object which has empty array
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [], shippingAddress: {}, paymentMethod: "PayPal" };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload; // this helps to get the current item

      const existItem = state.cartItems.find((x) => x._id === item._id); //this helps in checking the id nd whether the item exist in the cart or not

      if (existItem) {
        //if exists then map through the cart items nd just update the quantity
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        // if not then add the item at the end
        state.cartItems = [...state.cartItems, item]; // we are not using state.cartItems.push becoz state is immutable so we using spreading for adding item
      }

      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);

      return updateCart(state);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      return updateCart(state);
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      return updateCart(state);
    },
    clearCartItems: (state, action) => {
      state.cartItems = [];
      return updateCart(state);
    },
    resetCart: (state) => (state = initialState),
  },
});

export const {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  clearCartItems,
  resetCart
} = cartSlice.actions;

export default cartSlice.reducer;
