import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const GetProducts = createAsyncThunk(
  "getProducts/products",
  async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  }
);

export const productSlice = createSlice({
  name: "Product",
  initialState: {
    Products: [],
    loading: false
  },
  extraReducers: {
    [GetProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [GetProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.Products = action.payload;
    },
    [GetProducts.rejected]: (state, action) => {
      state.loading = false;
    }
  }
});

export default productSlice.reducer;
