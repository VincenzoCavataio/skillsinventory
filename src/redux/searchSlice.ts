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
  },
});

export default searchSlice.reducer;
export const { updateFilter } = searchSlice.actions;
