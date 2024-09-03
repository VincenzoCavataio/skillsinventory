import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ReduxStore } from "./types";

type Props = {
  andOr: string;
};
const initialState: Props = {
  andOr: "OR",
};
const andOrSlice = createSlice({
  name: "andOrSlice",
  initialState,
  reducers: {
    updateAndOr: (state, action) => {
      if (action.payload === "AND") {
        state.andOr = "AND";
      } else {
        state.andOr = "OR";
      }
    },
  },
});

export const andOrSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.andOrStore
);

export default andOrSlice.reducer;
export const { updateAndOr } = andOrSlice.actions;
