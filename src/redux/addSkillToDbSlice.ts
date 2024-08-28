import { createSelector, createSlice } from "@reduxjs/toolkit";
import { CheckedSkills, ReduxStore } from "./types";

const initialState: CheckedSkills = {
  checkedSkills: [],
};

const addSkillToDbSlice = createSlice({
  name: "addSkillToDbSlice",
  initialState,
  reducers: {
    updateSkillName: (state, action) => {
      const { id, idTemp, name } = action.payload;
      const skill = state.checkedSkills.find(
        (skill) => skill.id === id || skill.idTemp === idTemp
      );
      console.log(skill);
      if (skill) {
        skill.name = name;
      }
    },
    updateSkillLevel: (state, action) => {
      const { id, idTemp, level } = action.payload;
      const skill = state.checkedSkills.find(
        (skill) => skill.id === id || skill.idTemp === idTemp
      );
      if (skill) {
        skill.level = level;
      }
    },
    updateSkillExp: (state, action) => {
      const { id, idTemp, exp } = action.payload;
      const skill = state.checkedSkills.find(
        (skill) => skill.id === id || skill.idTemp === idTemp
      );
      if (skill) {
        skill.exp = exp;
      }
    },
    updateSkillNote: (state, action) => {
      const { id, idTemp, note } = action.payload;
      const skill = state.checkedSkills.find(
        (skill) => skill.id === id || skill.idTemp === idTemp
      );
      if (skill) {
        skill.note = note;
      }
    },
    updateCheckedSkillsDb: (state, action) => {
      const IDs = [...state.checkedSkills.map((skill) => skill.id)];
      if (IDs.includes(action.payload.id)) {
        state.checkedSkills = state.checkedSkills.filter(
          (skill) => skill.id !== action.payload.id
        );
      } else {
        state.checkedSkills = [...state.checkedSkills, action.payload];
      }
    },
    removeSkillDb: (state, action) => {
      state.checkedSkills = state.checkedSkills.filter((skill) => {
        if (action.payload.idTemp !== undefined) {
          return skill.idTemp !== action.payload.idTemp;
        } else {
          return skill.id !== action.payload.id;
        }
      });
    },
    resetCheckedSkillsDb: (state) => {
      state.checkedSkills = initialState.checkedSkills;
    },
    addEmptySkillDb: (state, action) => {
      state.checkedSkills = [...state.checkedSkills, action.payload];
    },
  },
});
export const dbSkillSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.toDbSkills.checkedSkills
);

export const {
  updateSkillName,
  updateSkillLevel,
  updateSkillExp,
  updateSkillNote,
  updateCheckedSkillsDb,
  removeSkillDb,
  resetCheckedSkillsDb,
  addEmptySkillDb,
} = addSkillToDbSlice.actions;

export default addSkillToDbSlice.reducer;
