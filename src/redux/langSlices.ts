import { createSlice } from "@reduxjs/toolkit";

const initialState = { lang: "en" };

const langSlice = createSlice({
  name: "langSlice",
  initialState,
  reducers: {
    selectLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export default langSlice.reducer;
export const { selectLang } = langSlice.actions;
