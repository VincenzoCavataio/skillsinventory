import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./filtersSlice";

export const store = configureStore({
  reducer: {
    filters: filtersSlice,
  }
});
