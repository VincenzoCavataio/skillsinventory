import { configureStore } from "@reduxjs/toolkit";
import skillsSlice from "./skillsSlice";
import searchSlice from "./searchSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  // filters: filtersSlice, vecchia gestione con skill a blocchi

  reducer: {
    skills: skillsSlice,
    search: searchSlice,
    user: userSlice,
  },
});
