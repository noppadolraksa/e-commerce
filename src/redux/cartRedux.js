import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
  wishlist: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // when you click in "add to cart"=>
    addProduct: (state, action) => {
      const findProduct = state.products.find(
        (item) => item.item[0]._id === action.payload.item[0]._id
      );
      const findIndexProduct = state.products.findIndex(
        (item) => item.item[0]._id === action.payload.item[0]._id
      );

      if (!findProduct) {
        state.quantity += 1;
        state.products.push(action.payload);

        state.total += action.payload.item[0].price * action.payload.quantity;
      } else {
        state.products[findIndexProduct].quantity += action.payload.quantity;
        state.total += action.payload.item[0].price * action.payload.quantity;
      }
    },
    changeQuantity: (state, action) => {
      const findProduct = state.products.find(
        (item) => item.item[0]._id === action.payload.value._id
      );
      if (action.payload.name === "inc") {
        findProduct.quantity += 1;

        state.total += action.payload.value.price;
      } else {
        findProduct.quantity -= 1;
        state.total -= action.payload.value.price;
      }
    },
    deleteProduct: (state, action) => {
      const findIndexProduct = state.products.findIndex(
        (item) => item.item[0]._id === action.payload.value._id
      );
      state.quantity -= 1;
      state.products.splice(findIndexProduct, 1);
    },
    deleteAllProduct: () => initialState,
    addWishlist: (state, action) => {
      const findWishlist = state.wishlist.find(
        (item) => item._id === action.payload._id
      );
      if (findWishlist === undefined) {
        state.wishlist.push(action.payload);
      }
    },
    removeWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const {
  addProduct,
  changeQuantity,
  deleteProduct,
  deleteAllProduct,
  addWishlist,
  removeWishlist,
} = cartSlice.actions;
export default cartSlice.reducer;
