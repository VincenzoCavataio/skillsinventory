import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./filtersSlice";
import skillsSlice from "./skillsSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
  reducer: {
    filters: filtersSlice,
    skills: skillsSlice,
    search: searchSlice,
  },
});
