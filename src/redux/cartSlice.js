import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addtoCart: (state, action) => {
            console.log(state, action);

            state.cart = [...state.cart, action.payload];
        },
        removefromCart: (state, action) => {
            console.log(state, action);
            state.cart = state.cart.filter((_, index) => index !== action.payload.id)

        }
    }
})

export default cartSlice.reducer;
export const { addtoCart, removefromCart } = cartSlice.actions;