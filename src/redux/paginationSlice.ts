import { createSelector, createSlice } from "@reduxjs/toolkit";
import { PaginationSettings, ReduxStore } from "./types";

const initialState: PaginationSettings = {
  itemNumber: 20,
  pageStart: 1,
};

const paginationSlice = createSlice({
  name: "paginationSlice",
  initialState,
  reducers: {
    itemNumberFilter: (state, action) => {
      if (action.payload.itemNumber != state.itemNumber) {
        state.itemNumber = action.payload.itemNumber;
      }
    },
    paginationPageStart: (state, action) => {
      state.pageStart = action.payload;
    },
    itemPageFilters: (state, action) => {
      if (action.payload.pageStart != state.pageStart) {
        state.pageStart = action.payload.pageStart;
      }
    },
  },
});

export const paginationSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.pagination
);

export default paginationSlice.reducer;
export const { itemNumberFilter, itemPageFilters, paginationPageStart } =
  paginationSlice.actions;
