import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ReduxStore } from "./types";

const initialState = { user: {} };

const userDataSlice = createSlice({
  name: "userDataSlice",
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const userDataSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.user.user
);

export default userDataSlice.reducer;
export const { selectUser } = userDataSlice.actions;
