import { createSlice } from "@reduxjs/toolkit";
import { EditMode } from "./types";

const initialState: EditMode = {
  isActive: false,
  editPayload: undefined,
};

const editProfileSlice = createSlice({
  name: "editProfileSlice",
  initialState,
  reducers: {
    setEditMode(state, action) {
      state.isActive = action.payload;

      //   state.editMode.editPayload = action.payload.editPayload;
    },
  },
});

export const { setEditMode } = editProfileSlice.actions;
export default editProfileSlice.reducer;
