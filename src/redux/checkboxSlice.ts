import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ReduxStore } from "./types";

const initialState: number[] = [];

const checkboxSlice = createSlice({
  name: "checkboxSlice",
  initialState,
  reducers: {
    checkboxMarker: (state, action) => {
      const id = action.payload;
      const existingItemIndex = state.findIndex((itemId) => itemId === id);
      if (existingItemIndex !== -1) {
        state.splice(existingItemIndex, 1);
      } else {
        state.push(id);
      }
    },
  },
});

export const checkboxManagerSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.checkboxManager
);

export default checkboxSlice.reducer;
export const { checkboxMarker } = checkboxSlice.actions;
