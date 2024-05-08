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

const searchSlice = createSlice({
  name: "searchSlice",
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

    // filtraOp: (state, action) => { 258 259 256
    //     action.payload.skills.forEach((skill: Skill) => {
    //       const alreadyUsedSkillsID = state.skills.map((skill) => skill.id);
    //       if (skill.id && !alreadyUsedSkillsID.includes(skill.id)) {
    //         state.skills.push(skill);
    //       }
    //     });
    // },
  },
});

export default searchSlice.reducer;
export const { insertEduLevel, insertInstitute } = searchSlice.actions;
