import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        }
    }
})

export default loginSlice.reducer;
export const { login } = loginSlice.actions;
