import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";

export default configureStore({
  //we are not only have just one reducer
  reducer: {
    cart: cartReducer,
  },
});
