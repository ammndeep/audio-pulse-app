import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const find = state.cart.findIndex((item) => item.id === action.payload.id)
            if (find >= 0) {
                state.cart[find].Qty += 1;
            } else {
                state.cart.push(action.payload)
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },

        increasedQty: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, Qty: item.Qty + 1 };
                }
                return item;
            });
        },
        decreaseQty: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload && item.Qty > 1) {
                    return { ...item, Qty: item.Qty - 1 };
                }
                return item;
            });
        },
    }
})

export const { addToCart, removeFromCart, increasedQty, decreaseQty } = CartSlice.actions;
export default CartSlice;

