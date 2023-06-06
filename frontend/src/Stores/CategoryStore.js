import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryService from "../Services/categoryService";

const initialState = {
  categories: [],
};

export const getCategories = createAsyncThunk("getCategory", async () => {
  try {
    return await categoryService.getCategory();
  } catch (error) {
    return error;
  }
});
export const addCategory = createAsyncThunk("addCategory", async (category) => {
  try {
    return await categoryService.addCategory(category);
  } catch (error) {
    return error;
  }
});

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    categoryadd: (state, action) => {
      state.categories = [action.payload, ...state.categories];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      });
  },
});
//export const {categoryadd} =  categories.actions
export default categorySlice.reducer;
