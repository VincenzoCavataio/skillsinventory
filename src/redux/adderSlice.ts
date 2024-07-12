import { createSlice } from "@reduxjs/toolkit";
import { RowsManagement } from "./types";

const initialState: RowsManagement = {
  skillRows: 0,
  eduRows: 0,
  certRows: 0,
};
const adderSlice = createSlice({
  name: "adderSlice",
  initialState,
  reducers: {
    updateSkillRowsNumber: (state, action) => {
      state.skillRows = action.payload;
      console.log(state.skillRows);
    },
    updateEduRowsNumber: (state, action) => {
      state.eduRows = action.payload;
    },
    updateCertRowsNumber: (state, action) => {
      state.certRows = action.payload;
    },
  },
});

export default adderSlice.reducer;
export const {
  updateSkillRowsNumber,
  updateCertRowsNumber,
  updateEduRowsNumber,
} = adderSlice.actions;
