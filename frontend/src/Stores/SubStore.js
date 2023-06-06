import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import subService from "../Services/subService";

const initialState = {
  subcategories: [],
};

export const getSubcategories = createAsyncThunk("getSubcategory", async () => {
  try {
    return await subService.getSubcategory();
  } catch (error) {
    return error;
  }
});

export const addSubcategories = createAsyncThunk(
  "addSubcategory",
  async (subcategory) => {
    try {
      return await subService.addSubcategory(subcategory);
    } catch (error) {
      return error;
    }
  }
);

const subcategorySlice = createSlice({
  name: "subcategory",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getSubcategories.fulfilled, (state, action) => {
        state.subcategories = action.payload;
      })
      .addCase(addSubcategories.fulfilled, (state, action) => {
        state.subcategories.push(action.payload);
      });
  },
});

export default subcategorySlice.reducer;
