import { createSlice } from "@reduxjs/toolkit";
import { Filters } from "./types";

const initialState: Filters = { skills: [], fullName: "", cities: [], certifications: [], institute: "", course: "" }

const filtersSlice = createSlice({
    name: 'filtersState',
    initialState,
    reducers: {
        addSkill: (state, action) => {
            const guard = state.skills.map(skill => skill.label);
            if (action.payload.label && action.payload.levelType && !guard.includes(action.payload.label)) {
                const newObj = { label: action.payload.label, levelType: action.payload.levelType, level: 1 }
                state.skills.push(newObj)
            }
        },
        editSkillLevel: (state, action) => {
            const { name, value } = action.payload;
            const updatedObj = state.skills.map(e => e.label === name
                ? { label: e.label, level: value, levelType: e.levelType }
                : { label: e.label, level: e.level, levelType: e.levelType }
            )
            state.skills = updatedObj
        },
        editSkillLevelType: (state, action) => {
            const { name, sliderType } = action.payload;
            const updatedObj = state.skills.map(e => e.label === name
                ? { label: e.label, level: e.level, levelType: sliderType }
                : { label: e.label, level: e.level, levelType: e.levelType }
            )
            state.skills = updatedObj
        },
        removeSkill: (state, action) => {
            if (action.payload.label) {
                state.skills = state.skills.filter((skill) => skill.label !== action.payload.label);
            }
        },
        resetFilters: (state) => {
            state.certifications = initialState.certifications
            state.skills = initialState.skills
            state.cities = initialState.cities
            state.fullName = initialState.fullName
            state.institute = initialState.institute
            state.course = initialState.course
        }
    }
})

export default filtersSlice.reducer;
export const { addSkill, removeSkill, editSkillLevel, editSkillLevelType, resetFilters } = filtersSlice.actions;
