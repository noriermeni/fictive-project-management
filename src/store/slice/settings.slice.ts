import { createSlice } from '@reduxjs/toolkit'
import { setLocalData } from "../../services/localstorage/localstorage";

const defaultState = {
    customColor: "#a6bf60",
    theme: "GREEN",
    language: "sq",
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState: defaultState,
    reducers: {
        setTheme(state, action) {
            state.theme = action.payload;
            setLocalData('theme', action.payload);
        },
        setLanguage(state, action) {
            state.language = action.payload;
            setLocalData('language', action.payload)
        },
        setCustomColor(state, action) {
            state.customColor = action.payload;
            setLocalData('color', action.payload);
        }
    },
})

export const {
    setTheme,
    setLanguage,
    setCustomColor
} = settingsSlice.actions;

export default settingsSlice.reducer;