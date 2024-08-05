import { createSelector, createSlice } from "@reduxjs/toolkit";
import { CheckedEdus, ReduxStore } from "./types";

const initialState: CheckedEdus = {
  checkedEdus: [],
};
const checkboxEdusSelection = createSlice({
  name: "checkedEdus",
  initialState,
  reducers: {
    updateCheckedEdus: (state, action) => {
      const IDs = [...state.checkedEdus.map((edu) => edu.id)];
      if (IDs.includes(action.payload.id)) {
        state.checkedEdus = state.checkedEdus.filter(
          (edu) => edu.id !== action.payload.id
        );
      } else {
        state.checkedEdus = [...state.checkedEdus, action.payload];
      }
    },
    removeEdu: (state, action) => {
      state.checkedEdus = state.checkedEdus.filter(
        (edu) => edu.id !== action.payload
      );
    },
    resetCheckedEdus: (state) => {
      state.checkedEdus = initialState.checkedEdus;
    },
  },
});

export const checkboxEdusSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.checkedEdus.checkedEdus
);

export default checkboxEdusSelection.reducer;
export const { updateCheckedEdus, removeEdu, resetCheckedEdus } =
  checkboxEdusSelection.actions;
