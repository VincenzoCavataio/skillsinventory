import { createSelector, createSlice } from "@reduxjs/toolkit";
import { CheckedSkills, ReduxStore } from "./types";

const initialState: CheckedSkills = {
  checkedSkills: [],
};
const checkboxSkillsSelection = createSlice({
  name: "checkedSkills",
  initialState,
  reducers: {
    updateCheckedSkills: (state, action) => {
      const IDs = [...state.checkedSkills.map((skill) => skill.id)];
      if (IDs.includes(action.payload.id)) {
        state.checkedSkills = state.checkedSkills.filter(
          (skill) => skill.id !== action.payload.id
        );
      } else {
        state.checkedSkills = [...state.checkedSkills, action.payload];
      }
    },
    removeSkill: (state, action) => {
      state.checkedSkills = state.checkedSkills.filter((skill) => {
        if (action.payload.idTemp !== undefined) {
          return skill.idTemp !== action.payload.idTemp;
        } else {
          return skill.id !== action.payload.id;
        }
      });
    },
    resetCheckedSkills: (state) => {
      state.checkedSkills = initialState.checkedSkills;
    },
    addEmptySkill: (state, action) => {
      state.checkedSkills = [...state.checkedSkills, action.payload];
    },
  },
});

export const checkboxSkillsSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.checkedSkills.checkedSkills
);

export default checkboxSkillsSelection.reducer;
export const {
  updateCheckedSkills,
  removeSkill,
  resetCheckedSkills,
  addEmptySkill,
} = checkboxSkillsSelection.actions;
