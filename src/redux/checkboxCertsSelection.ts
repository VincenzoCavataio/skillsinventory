import { createSelector, createSlice } from "@reduxjs/toolkit";
import { CheckedCerts, ReduxStore } from "./types";

const initialState: CheckedCerts = {
  checkedCerts: [],
};
const checkboxCertsSelection = createSlice({
  name: "checkedCerts",
  initialState,
  reducers: {
    updateCheckedCerts: (state, action) => {
      const IDs = [...state.checkedCerts.map((cert) => cert.id)];
      if (IDs.includes(action.payload.id)) {
        state.checkedCerts = state.checkedCerts.filter(
          (cert) => cert.id !== action.payload.id
        );
      } else {
        state.checkedCerts = [...state.checkedCerts, action.payload];
      }
    },
    removeCert: (state, action) => {
      // state.checkedCerts = state.checkedCerts.filter(
      //   (cert) => cert.id !== action.payload
      // );
      state.checkedCerts = state.checkedCerts.filter((cert) => {
        if (action.payload.idTemp !== undefined) {
          return cert.idTemp !== action.payload.idTemp;
        } else {
          return cert.id !== action.payload.id;
        }
      });
    },
    resetCheckedCerts: (state) => {
      state.checkedCerts = initialState.checkedCerts;
    },
    addEmptyCert: (state, action) => {
      state.checkedCerts = [...state.checkedCerts, action.payload];
    },
  },
});

export const checkboxCertsSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.checkedCerts.checkedCerts
);

export default checkboxCertsSelection.reducer;
export const {
  updateCheckedCerts,
  removeCert,
  resetCheckedCerts,
  addEmptyCert,
} = checkboxCertsSelection.actions;
