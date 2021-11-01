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
      //1# quantity+1
      state.quantity += 1;
      //2# push state into cart (payload is new products object in cart)
      state.products.push(action.payload.product);
      //3# total price = [...total] + price
      state.total += action.payload.price;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
