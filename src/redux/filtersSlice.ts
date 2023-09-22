import { createSlice } from "@reduxjs/toolkit";
import { ReduxFiltersObj } from "../pages/DashboardPage/types";

const initialState: ReduxFiltersObj = { skills: [], fullName: "", cities: [], certifications: [], institute: "", course: "" }


const filtersSlice = createSlice({
    name: 'filtersState',
    initialState,
    reducers: {
        addSkill: (state, action) => {
            const guard = state.skills.map(skill => skill.label);
            if (action.payload.label && action.payload.levelType && !guard.includes(action.payload.label)) {
                const newObj = { label: action.payload.label, levelType: action.payload.levelType }
                state.skills = [...state.skills, newObj];
            }
        },
        editSkillLevel: (state, action) => {
            if (action.payload.label && action.payload.levelType) {
                const newObj = { label: action.payload.label, levelType: action.payload.levelType }
                state.skills = [...state.skills, newObj];
            }
        },
        editSkillLevelType: (state, action) => {
            if (action.payload.levelType) {
                state.skills.map((skill) => skill.levelType !== action.payload.levelType);
            }
        },
        removeSkill: (state, action) => {
            if (action.payload.label) {
                state.skills = state.skills.filter((skill) => skill.label !== action.payload.label);
            }
        },
    }
})

export default filtersSlice.reducer;
export const { addSkill, removeSkill, editSkillLevelType } = filtersSlice.actions;
