import { createSlice } from "@reduxjs/toolkit";
import { Skill } from "./types";

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
        console.log(initialState);
      });
    },
    deleteSkills: (state, action) => {
      state.skills = action.payload.skills;
    },
  },
});

export default skillsSlice.reducer;
export const { insertSkills, deleteSkills } = skillsSlice.actions;
