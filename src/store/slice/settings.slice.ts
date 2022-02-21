import { createSlice } from '@reduxjs/toolkit'
import { setLocalData } from "../../services/localstorage/localstorage";
import {ThemeEnum} from "../../enums/ThemeTypes/theme.enum";

const defaultState = {
    customColor: "#a6bf60",
    theme: ThemeEnum.GREEN,
    language: "sq",
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState: defaultState,
    reducers: {
        setTheme(state, action) {
            setLocalData('theme', action.payload);
        },
        setLanguage(state, action) {
            state.language = action.payload;
            setLocalData('language', action.payload)
        },
        setCustomColor(state, action) {
            state.customColor = action.payload.color;
            state.theme = action.payload.type;
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