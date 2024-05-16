import { configureStore } from "@reduxjs/toolkit";
import productDetailSlice from "../features/productDetailSlice";

export const store = configureStore({
  reducer: {
    app: productDetailSlice,
  },
});
