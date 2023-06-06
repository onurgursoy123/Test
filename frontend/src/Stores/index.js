import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./CategoryStore";
import subcategoryReducer from "./SubStore"

const store = configureStore({
  reducer: {
    categoryReducer,
    subcategoryReducer,
  },
});

export default store;
