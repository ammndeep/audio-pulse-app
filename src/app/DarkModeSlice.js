import { createSlice } from "@reduxjs/toolkit";


const DarkModeSlice = createSlice({
    name: 'darkMode',
    initialState: false,
    reducers: {
        toggleTheme: (state) => {
            return state = !state;
        }
    }
})

export const DarkModeActions = DarkModeSlice.actions;
export default DarkModeSlice;