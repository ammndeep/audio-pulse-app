import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
        return JSON.parse(cartData);
    } else {
        return [];
    }
};

const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: loadCartFromLocalStorage(),
        totalQuantity: 0,
        totalAmount: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const find = state.cart.findIndex((item) => item.id === action.payload.id)
            if (find >= 0) {
                state.cart[find].Qty += 1;
            } else {
                state.cart.push(action.payload)
            }
            saveCartToLocalStorage(state.cart);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
            saveCartToLocalStorage(state.cart);
        },

        increasedQty: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, Qty: item.Qty + 1 };
                }
                return item;
            });
            saveCartToLocalStorage(state.cart);
        },
        decreaseQty: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload && item.Qty > 1) {
                    return { ...item, Qty: item.Qty - 1 };
                }
                return item;
            });
            saveCartToLocalStorage(state.cart);
        },
        getCartTotal: (state) => {
            let { totalQuantity, totalAmount } = state.cart.reduce((cartTotal, cartItem) => {
                const { price, Qty } = cartItem;
                const itemTotal = price * Qty;
                cartTotal.totalAmount += itemTotal;
                cartTotal.totalQuantity += Qty;
                return cartTotal;
            },
                {
                    totalAmount: 0,
                    totalQuantity: 0,
                });
            state.totalAmount = parseInt(totalAmount.toFixed(2));
            state.totalQuantity = totalQuantity;
        }
    }
})

export const { addToCart, removeFromCart, increasedQty, decreaseQty, getCartTotal } = CartSlice.actions;
export default CartSlice;

