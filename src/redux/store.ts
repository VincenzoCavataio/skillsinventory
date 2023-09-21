import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./filtersSlice";
import skillSlice from "./skillSlice";

export const store = configureStore({
  reducer: {
    filters: filtersSlice,
    addSkills: skillSlice,
    removeSkills: skillSlice
  }
})
