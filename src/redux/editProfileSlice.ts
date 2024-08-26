import { createSelector, createSlice } from "@reduxjs/toolkit";
import { EditMode, ReduxStore } from "./types";

const initialState: EditMode = {
  isActive: false,
  editPayload: undefined,
  userData: undefined,
};

const editProfileSlice = createSlice({
  name: "editProfileSlice",
  initialState,
  reducers: {
    updateEditPayload(state, action) {
      if (state.editPayload) {
        state.editPayload = { ...state.editPayload, ...action.payload };
      } else {
        state.editPayload = action.payload;
      }
    },
    saveChanges(state) {
      state.userData = state.editPayload;
      state.editPayload = undefined;
      state.isActive = false;
    },
    discardChanges(state) {
      state.editPayload = undefined;
      state.isActive = false;
    },
  },
});

export const editProfileSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.editManager.editPayload
);

export const { updateEditPayload, saveChanges, discardChanges } =
  editProfileSlice.actions;
export default editProfileSlice.reducer;
