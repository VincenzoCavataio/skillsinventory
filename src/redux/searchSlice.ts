import { createSlice } from "@reduxjs/toolkit";

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

export default searchSlice.reducer;
export const { updateFilter, resetFilters } = searchSlice.actions;
