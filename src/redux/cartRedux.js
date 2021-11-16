import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    //how many items inside cart
    quantity: 0,
    total: 0,
  },
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
      }
    },
    changeQuantity: (state, action) => {
      const findProduct = state.products.find(
        (item) => item.item[0]._id === action.payload.item.item[0]._id
      );
      if (action.payload === "inc") {
        findProduct.quantity += 1;
        state.total -= action.payload.item.item[0].price;
      }
      if (action.payload === "dec") {
      }
    },
    deleteProduct: (state, action) => {
      state.quantity -= 1;
      state.products.splice(state.products.indexOf());
    },
  },
});

export const { addProduct, changeQuantity, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
