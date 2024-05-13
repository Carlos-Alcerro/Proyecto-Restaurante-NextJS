import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getTotalItems(state) {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },
    getSummaryInformation(state) {
      const subTotal = state.cart.reduce(
        (subTotal, product) => product.quantity * product.price + subTotal,
        0
      );
      const tax = subTotal * 0.15;
      const total = subTotal + tax;
      const itemInCart = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );

      return {
        subTotal,
        tax,
        total,
        itemInCart,
      };
    },
    addProductToCart(state, action) {
      const product = action.payload;

      const productInCart = state.cart.some((item) => item.id === product.id);

      if (!productInCart) {
        state.cart.push(product);
      } else {
        state.cart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
    },
    updateProductToCart(state, action) {
      const { product, quantity } = action.payload;
      state.cart = state.cart.map((item) =>
        item.id === product.id && item.size === product.size
          ? { ...item, quantity: quantity }
          : item
      );
    },
    deleteProductInCart(state, action) {
      const product = action.payload;
      state.cart = state.cart.filter(
        (item) => !(item.id === product.id && item.size === product.size)
      );
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  getTotalItems,
  getSummaryInformation,
  addProductToCart,
  updateProductToCart,
  deleteProductInCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice;
