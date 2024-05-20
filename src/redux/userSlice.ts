import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: {} };

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { selectUser } = userSlice.actions;
