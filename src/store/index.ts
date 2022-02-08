import { configureStore } from "@reduxjs/toolkit";
import { setAutoFreeze } from 'immer';

import settingsSlice from './slice/settings.slice';

setAutoFreeze(false);

const store = configureStore({
    reducer: {
        settings: settingsSlice,
    },
    devTools: { name: "projectManagement" },
});

export default store;