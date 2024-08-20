import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ReduxStore } from "./types";

const initialState = { error: { value: null, label: null } };

const loginStatus = createSlice({
  name: "loginStatus",
  initialState,
  reducers: {
    setLoginError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const loginStatusSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.loginStatus
);

export default loginStatus.reducer;
export const { setLoginError } = loginStatus.actions;
