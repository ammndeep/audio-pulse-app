import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("darkMode") === "true";

const DarkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            localStorage.setItem("darkMode", !state);
            return !state;
        }

    }
})

export const DarkModeActions = DarkModeSlice.actions;
export default DarkModeSlice;