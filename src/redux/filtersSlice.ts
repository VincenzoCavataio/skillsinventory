import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = []

const filtersSlice = createSlice({
    name: 'filters',
    initialState:
        initialState
    ,
    reducers: {
        filters: (state, action) => {
            state = [...state, action.payload];
        }
    }
})

export default filtersSlice.reducer;
export const { filters } = filtersSlice.actions;
