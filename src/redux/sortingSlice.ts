import { createSlice } from "@reduxjs/toolkit";
import { Sorting } from "./types";
type Props = {
  sort: Sorting[];
};

const initialState: Props = {
  sort: [
    { label: "Last Name", order: "" },
    { label: "Education", order: "" },
    { label: "Address", order: "" },
    { label: "Ranking", order: "" },
  ],
};

const sortingSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    updateSort: (state, action) => {
      const { label, order } = action.payload;
      state.sort = state.sort.map((item) => {
        if (item.label === label) {
          return { ...item, order: item.order === order ? "" : order };
        } else {
          return { ...item, order: "" };
        }
      });
    },
  },
});

export default sortingSlice.reducer;
export const { updateSort } = sortingSlice.actions;
