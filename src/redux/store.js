import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Products/productSlice";
const store = configureStore({
  reducer: {
    product: productReducer
  }
});

export default store;
