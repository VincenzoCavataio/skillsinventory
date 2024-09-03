import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ReduxStore } from "./types";

const initialState = {
  filters: {},
};

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.filters = action.payload.filters;
    },
    resetFilters: (state) => {
      state.filters = initialState;
    },
  },
});

export const searchSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.search
);

export const searchFiltersSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.search?.filters.certification || []
);
export const searchFiltersCitySelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.search?.filters.city || []
);
export const searchFiltersNameSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.search?.filters.fullName || ""
);
export default searchSlice.reducer;
export const { updateFilter, resetFilters } = searchSlice.actions;
