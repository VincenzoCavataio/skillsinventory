import { createSlice } from "@reduxjs/toolkit";
import { RowsManagement, SkillRowType } from "./types";
import { CertRowType, EduRowType } from "../components/UserAddPanel/types";
//TODO:da cancellare
const initialState: RowsManagement = {
  skillRows: 0,
  eduRows: 0,
  certRows: 0,
  skillRowsData: [] as SkillRowType[],
  eduRowsData: [] as EduRowType[],
  certRowsData: [] as CertRowType[],
  checked: [] as string[],
};
const adderSlice = createSlice({
  name: "adderSlice",
  initialState,
  reducers: {
    updateSkillRowsNumber: (state, action) => {
      state.skillRows = action.payload;
      // console.log(state.skillRows);
    },
    updateEduRowsNumber: (state, action) => {
      state.eduRows = action.payload;
    },
    updateCertRowsNumber: (state, action) => {
      state.certRows = action.payload;
    },
    updateSkillRowsData: (state, action) => {
      // state.skillRowsData = action.payload;
      state.skillRowsData = [...state.skillRowsData, action.payload];
      // console.log(state.skillRowsData);
    },
    updateEduRowsData: (state, action) => {
      // state.eduRowsData = action.payload;
      state.eduRowsData = [...state.eduRowsData, action.payload];
      // console.log(state.eduRowsData);
    },
    updateCertRowsData: (state, action) => {
      // state.eduRowsData = action.payload;
      state.certRowsData = [...state.certRowsData, action.payload];
      // console.log(state.certRowsData);
    },
    addSkillRowData: (state, action) => {
      state.skillRowsData.push(action.payload);
    },
    addEduRowData: (state, action) => {
      state.eduRowsData.push(action.payload);
    },
    addCertRowData: (state, action) => {
      state.certRowsData.push(action.payload);
    },
    removeSkillRowData: (state, action) => {
      state.skillRowsData = state.skillRowsData.filter(
        (row) => row.id !== action.payload
      );
      if (state.skillRows > 0) {
        state.skillRows -= 1;
      }
    },
    removeEduRowData: (state, action) => {
      state.eduRowsData = state.eduRowsData.filter(
        (row) => row.id !== action.payload
      );
      if (state.eduRows > 0) {
        state.eduRows -= 1;
      }
    },
    removeCertRowData: (state, action) => {
      state.certRowsData = state.certRowsData.filter(
        (row) => row.id !== action.payload
      );
      if (state.certRows > 0) {
        state.certRows -= 1;
      }
    },
    checkItem: (state, action) => {
      state.checked.push(action.payload);
    },
    uncheckItem: (state, action) => {
      state.checked = state.checked.filter((item) => item !== action.payload);
    },
    checkAll: (state, action) => {
      state.checked = action.payload;
    },
    uncheckAll: (state) => {
      state.checked = [];
    },
  },
});

export default adderSlice.reducer;
export const {
  updateSkillRowsNumber,
  updateCertRowsNumber,
  updateEduRowsNumber,
  updateSkillRowsData,
  updateEduRowsData,
  updateCertRowsData,
  addSkillRowData,
  addEduRowData,
  addCertRowData,
  removeCertRowData,
  removeEduRowData,
  removeSkillRowData,
  checkItem,
  uncheckItem,
  checkAll,
  uncheckAll,
} = adderSlice.actions;
