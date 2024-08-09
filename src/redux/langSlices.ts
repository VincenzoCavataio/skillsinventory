import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ReduxStore } from "./types";

const initialState = { lang: "en" };

const langSlice = createSlice({
  name: "langSlice",
  initialState,
  reducers: {
    selectLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const langSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.lang
);

export default langSlice.reducer;
export const { selectLang } = langSlice.actions;
