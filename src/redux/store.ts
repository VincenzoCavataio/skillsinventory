import { configureStore } from "@reduxjs/toolkit";
import skillsSlice from "./skillsSlice";
import searchSlice from "./searchSlice";
import userSlice from "./userSlice";
import paginationSlice from "./paginationSlice";

export const store = configureStore({
  reducer: {
    skills: skillsSlice,
    search: searchSlice,
    user: userSlice,
    pagination: paginationSlice,
  },
});
