import { createSlice } from "@reduxjs/toolkit";

type Props = {
  andOr: string;
};
const initialState: Props = {
  andOr: "OR",
};
const andOrSlice = createSlice({
  name: "andOrSlice",
  initialState,
  reducers: {
    updateAndOr: (state, action) => {
      if (action.payload === "AND") {
        state.andOr = "AND";
      } else {
        state.andOr = "OR";
      }
    },
  },
});

export default andOrSlice.reducer;
export const { updateAndOr } = andOrSlice.actions;
