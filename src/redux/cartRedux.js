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
      const findProduct = state.products.findIndex(
        (item) => item.item[0]._id === action.payload.item[0]._id
      );

      if (!findProduct) {
        state.quantity += 1;
        state.products.push(action.payload);
        //3# total price = [...total] + price
        state.total += action.payload.item[0].price * action.payload.quantity;
      } else {
        state.products[findProduct].quantity += action.payload.quantity;
      }
      // const findProduct = state.products.filter((item) =>
      //   item._id === action.payload._id &&
      //   action.payload.item.hasOwnProperty("filterTitleTwo")
      //     ? Object.values(item.filters).includes(
      //         action.payload.item.filterProductsOne
      //       ) &&
      //       Object.values(item.filters).includes(
      //         action.payload.item.filterProductsTwo
      //       )
      //     : Object.values(item.filters).includes(
      //         action.payload.item.filterProductsOne
      //       )
      // );

      // if (findProduct) {
      //   findProduct.quantity += action.payload.quantity;
      //   state.products.push(action.payload);
      //   //3# total price = [...total] + price
      //   state.total += action.payload.item[0].price * action.payload.quantity;
      // }
    },
    incQuantity: (state, action) => {
      console.log(action.payload);
    },
    deleteProduct: (state, action) => {
      state.quantity -= 1;
      state.products.splice(state.products.indexOf());
    },
  },
});

export const { addProduct, incQuantity, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
