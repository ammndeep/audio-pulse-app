import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import DarkModeSlice from "./DarkModeSlice";

const CartStore = configureStore({
    reducer: {
        allCart: CartSlice.reducer,
        darkMode: DarkModeSlice.reducer,
    }
})

export default CartStore;