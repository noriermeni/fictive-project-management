import { configureStore } from "@reduxjs/toolkit";
import { setAutoFreeze } from 'immer';

import settingsSlice from './slice/settings.slice';
import projectSlice from './slice/project.slice';

setAutoFreeze(false);

const store = configureStore({
    reducer: {
        settings: settingsSlice,
        project: projectSlice
    },
    devTools: { name: "projectManagement" },
});

export default store;