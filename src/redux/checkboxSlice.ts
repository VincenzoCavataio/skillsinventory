import { createSlice } from "@reduxjs/toolkit";

const initialState: number[] = [];

const checkboxSlice = createSlice({
  name: "checkboxSlice",
  initialState,
  reducers: {
    checkboxMarker: (state, action) => {
      const id = action.payload;
      const existingItemIndex = state.findIndex((itemId) => itemId === id);
      if (existingItemIndex !== -1) {
        state.splice(existingItemIndex, 1);
      } else {
        state.push(id);
      }
    },
  },
});

export default checkboxSlice.reducer;
export const { checkboxMarker } = checkboxSlice.actions;
