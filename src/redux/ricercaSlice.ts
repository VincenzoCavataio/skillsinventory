import { createSlice } from "@reduxjs/toolkit";
import { Skill } from "./types";

const initialState: Filtri = {
  skills: [],
  fullName: "",
  cities: [],
  certifications: [],
  institute: "",
  course: "",
  eduLevel: "",
};
export type Filtri = {
  skills: Skill[];
  fullName: string;
  cities: string[];
  certifications: string[];
  institute: string;
  course: string;
  eduLevel: string;
};

const ricercaSlice = createSlice({
  name: "ricercaSlice",
  initialState,
  reducers: {
    insertEduLevel: (state, action) => {
      state.eduLevel = action.payload;
      console.log(action.payload);
    },
    insertInstitute: (state, action) => {
      state.institute = action.payload;
      console.log(action.payload);
    },

    // filtraOp: (state, action) => {
    //     action.payload.skills.forEach((skill: Skill) => {
    //       const alreadyUsedSkillsID = state.skills.map((skill) => skill.id);
    //       if (skill.id && !alreadyUsedSkillsID.includes(skill.id)) {
    //         state.skills.push(skill);
    //       }
    //     });
    // },
  },
});

export default ricercaSlice.reducer;
export const { insertEduLevel, insertInstitute } = ricercaSlice.actions;
