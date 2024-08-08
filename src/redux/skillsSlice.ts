import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ReduxStore, Skill } from "./types";

type Props = {
  skills: Skill[];
};

const initialState: Props = { skills: [] };

const skillsSlice = createSlice({
  name: "skillsSlice",
  initialState,
  reducers: {
    insertSkills: (state, action) => {
      action.payload.skills.forEach((skill: Skill) => {
        const alreadyUsedSkillsID = state.skills.map((skill) => skill.id);
        if (skill.id && !alreadyUsedSkillsID.includes(skill.id)) {
          state.skills.push(skill);
        }
      });
    },
    deleteSkills: (state, action) => {
      state.skills = action.payload.skills;
    },
    resetSkills: (state) => {
      state.skills = [];
    },
  },
});

export const skillsSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.skills
);

export default skillsSlice.reducer;
export const { insertSkills, deleteSkills, resetSkills } = skillsSlice.actions;
