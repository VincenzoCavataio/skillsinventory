import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = []

const skillsSlice = createSlice({
    name: 'skills',
    initialState:
        initialState
    ,
    reducers: {
        addSkills: (state, action) => {
            state = [...state, action.payload];
        },
        deleteSkills: (state, action) => {
            state = state.filter((_, index) => index !== action.payload.id)
        }
    }
})

export default skillsSlice.reducer;
export const { addSkills, deleteSkills } = skillsSlice.actions;
