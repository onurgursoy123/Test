import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "../Services/productService";

const initialState = {
  products: [],
};

export const getProducts = createAsyncThunk("getProduct", async () => {
  try {
    return await productService.getProduct();
  } catch (error) {
    return error;
  }
});

export const adddProducts = createAsyncThunk("adddProduct", async (product) => {
  try {
    return await productService.adddProduct(product);
  } catch (error) {
    return error;
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(adddProducts.fulfilled, (state, action) => {
        state.products.push(action.payload);
      });
  },
});

export default productSlice.reducer;
