import { configureStore } from "@reduxjs/toolkit";
import skillsSlice from "./skillsSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
  // filters: filtersSlice, vecchia gestione con skill a blocchi

  reducer: {
    skills: skillsSlice,
    search: searchSlice,
  },
});
