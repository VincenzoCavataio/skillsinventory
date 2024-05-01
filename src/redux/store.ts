import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./filtersSlice";
import skillsSlice from "./skillsSlice";

export const store = configureStore({
  reducer: {
    filters: filtersSlice,
    skills: skillsSlice,
  },
});
