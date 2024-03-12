import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlist: loadWishlist()
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            state.wishlist.push(action.payload);
            saveWishList(state.wishlist);
        },
        removeFromWishlist: (state, action) => {
            const newWishlist = state.wishlist.filter((product) => product?.id !== action.payload.id);
            state.wishlist = newWishlist;
            saveWishList(state.wishlist);
        },
    }
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice;

function loadWishlist() {
    const wishlistData = localStorage.getItem("wishlist");
    return wishlistData ? JSON.parse(wishlistData) : [];
}

function saveWishList(wishlist) {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}