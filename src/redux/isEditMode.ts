import { createSelector, createSlice } from "@reduxjs/toolkit";
import { EditMode, ReduxStore } from "./types";

const initialState: EditMode = {
  isActive: false,
};

const isEditMode = createSlice({
  name: "isEditMode",
  initialState,
  reducers: {
    setEditMode(state, action) {
      state.isActive = action.payload;
    },
  },
});

export const isEditModeSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.isEditMode.isActive
);

export const { setEditMode } = isEditMode.actions;
export default isEditMode.reducer;
