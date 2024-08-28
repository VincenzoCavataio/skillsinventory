import { createSelector, createSlice } from "@reduxjs/toolkit";
import { CheckedSkills, ReduxStore } from "./types";

const initialState: CheckedSkills = {
  checkedSkills: [],
};

const addSkillToBeSentSlice = createSlice({
  name: "addSkillToBeSentSlice",
  initialState,
  reducers: {
    updateSkillName: (state, action) => {
      const { id, idTemp, name } = action.payload;
      if (idTemp) {
        const skill = state.checkedSkills.find(
          (skill) => skill.idTemp === idTemp
        );
        if (skill) {
          skill.name = name;
        }
      } else {
        const skill = state.checkedSkills.find((skill) => skill.id === id);

        if (skill) {
          skill.name = name;
        }
      }
    },
    updateSkillLevel: (state, action) => {
      const { id, idTemp, level } = action.payload;
      if (idTemp) {
        const skill = state.checkedSkills.find(
          (skill) => skill.idTemp === idTemp
        );
        if (skill) {
          skill.level = level;
        }
      } else {
        const skill = state.checkedSkills.find((skill) => skill.id === id);

        if (skill) {
          skill.level = level;
        }
      }
    },
    updateSkillExp: (state, action) => {
      const { id, idTemp, exp } = action.payload;
      if (idTemp) {
        const skill = state.checkedSkills.find(
          (skill) => skill.idTemp === idTemp
        );
        if (skill) {
          skill.exp = exp;
        }
      } else {
        const skill = state.checkedSkills.find((skill) => skill.id === id);

        if (skill) {
          skill.exp = exp;
        }
      }
    },
    updateSkillNote: (state, action) => {
      const { id, idTemp, note } = action.payload;
      if (idTemp) {
        const skill = state.checkedSkills.find(
          (skill) => skill.idTemp === idTemp
        );
        if (skill) {
          skill.note = note;
        }
      } else {
        const skill = state.checkedSkills.find((skill) => skill.id === id);

        if (skill) {
          skill.note = note;
        }
      }
    },
    updateCheckedSkillsToBeSent: (state, action) => {
      const IDs = [...state.checkedSkills.map((skill) => skill.id)];
      if (IDs.includes(action.payload.id)) {
        state.checkedSkills = state.checkedSkills.filter(
          (skill) => skill.id !== action.payload.id
        );
      } else {
        state.checkedSkills = [...state.checkedSkills, action.payload];
      }
    },
    removeSkillToBeSent: (state, action) => {
      state.checkedSkills = state.checkedSkills.filter((skill) => {
        if (action.payload.idTemp !== undefined) {
          return skill.idTemp !== action.payload.idTemp;
        } else {
          return skill.id !== action.payload.id;
        }
      });
    },
    resetCheckedSkillsToBeSent: (state) => {
      state.checkedSkills = initialState.checkedSkills;
    },
    addEmptySkillToBeSent: (state, action) => {
      state.checkedSkills = [...state.checkedSkills, action.payload];
    },
  },
});
export const toBeSentSkillSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.toBeSentSkills.checkedSkills
);

export const {
  updateSkillName,
  updateSkillLevel,
  updateSkillExp,
  updateSkillNote,
  updateCheckedSkillsToBeSent,
  removeSkillToBeSent,
  resetCheckedSkillsToBeSent,
  addEmptySkillToBeSent,
} = addSkillToBeSentSlice.actions;

export default addSkillToBeSentSlice.reducer;
