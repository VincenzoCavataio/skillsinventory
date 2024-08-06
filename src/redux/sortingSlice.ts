import { createSlice } from "@reduxjs/toolkit";
import { Sorting } from "./types";
type Props = {
  sort: Sorting[];
};

const initialState: Props = {
  sort: [
    { label: "ID", order: "", colorUp: false, colorDown: false },
    { label: "Last Name", order: "", colorUp: false, colorDown: false },
    { label: "Education", order: "", colorUp: false, colorDown: false },
    { label: "Address", order: "", colorUp: false, colorDown: false },
    { label: "Ranking", order: "", colorUp: false, colorDown: false },
    { label: "Experience Years", order: "", colorUp: false, colorDown: false },
  ],
};

const sortingSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    updateSortUp: (state, action) => {
      const { label, order } = action.payload;

      state.sort = state.sort.map((item) => {
        if (item.label === label) {
          return {
            ...item,
            order: item.order === order ? "" : order,
            colorUp: !item.colorUp,
            colorDown: false,
          };
        } else {
          return { ...item, order: "", colorUp: false, colorDown: false };
        }
      });
    },
    updateSortDown: (state, action) => {
      const { label, order } = action.payload;
      state.sort = state.sort.map((item) => {
        if (item.label === label) {
          return {
            ...item,
            order: item.order === order ? "" : order,
            colorDown: !item.colorDown,
            colorUp: false,
          };
        } else {
          return { ...item, order: "", colorUp: false, colorDown: false };
        }
      });
    },
  },
});

export default sortingSlice.reducer;
export const { updateSortUp, updateSortDown } = sortingSlice.actions;
