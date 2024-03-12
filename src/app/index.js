import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import DarkModeSlice from "./DarkModeSlice";
import wishlistSlice from "./Wishlist";

const CartStore = configureStore({
    reducer: {
        allCart: CartSlice.reducer,
        darkMode: DarkModeSlice.reducer,
        wishlist: wishlistSlice.reducer,
    }
})

export default CartStore;