import { createSlice } from "@reduxjs/toolkit";
import { EditMode } from "./types";

const initialState: EditMode = {
  isActive: false,
  editPayload: undefined,
  userData: undefined,
};

const editProfileSlice = createSlice({
  name: "editProfileSlice",
  initialState,
  reducers: {
    setEditMode(state, action) {
      state.isActive = action.payload;
    },
    updateEditPayload(state, action) {
      //   state.editPayload = { ...state.editPayload, ...action.payload };
      // },
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

export const { setEditMode, updateEditPayload, saveChanges, discardChanges } =
  editProfileSlice.actions;
export default editProfileSlice.reducer;
