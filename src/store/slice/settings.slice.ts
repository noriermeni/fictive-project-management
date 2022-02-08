import { createSlice } from '@reduxjs/toolkit'
import { setLocalData } from "../../services/localstorage/localstorage";
import { ThemeEnum } from "../../enums/ThemeTypes/theme.enum";

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        theme: ThemeEnum.GREEN,
        language: 'en',
    },
    reducers: {
        setTheme(state, action) {
            state.theme = action.payload;
            setLocalData('theme', action.payload)
        },
        setLanguage(state, action) {
            state.language = action.payload;
            setLocalData('language', action.payload)
        },
    },
})

export const {
    setTheme,
    setLanguage
} = settingsSlice.actions;

export default settingsSlice.reducer;