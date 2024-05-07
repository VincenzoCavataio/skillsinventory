import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./filtersSlice";
import skillsSlice from "./skillsSlice";
import ricercaSlice from "./ricercaSlice";

export const store = configureStore({
  reducer: {
    filters: filtersSlice,
    skills: skillsSlice,
    ricerca: ricercaSlice,
  },
});
