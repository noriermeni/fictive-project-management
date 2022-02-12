import { createSlice } from '@reduxjs/toolkit'

const projectSlice = createSlice({
    name: 'project',
    initialState: {
        selectedUsersList: [],
        employeesPanel: false,
        selectedProjectTasks: [],
        selectedProjectChildrens: [],
        projectPathname: ""
    },
    reducers: {
        setSelectedUsers(state, action) {
            state.selectedUsersList = action.payload;
            state.employeesPanel = true;
        },
        clearSelectedUsers(state) {
            state.selectedUsersList = [];
            state.employeesPanel = false;
        },
        setSelectedProjectTasks(state, action) {
            if(action.payload.children) state.selectedProjectChildrens = action.payload.children;
            state.selectedProjectTasks = action.payload.tasks;
        },
        setProjectPathname(state, action) {
            state.projectPathname = action.payload;
        }
    },
})

export const {
    setSelectedUsers,
    clearSelectedUsers,
    setSelectedProjectTasks,
    setProjectPathname
} = projectSlice.actions;

export default projectSlice.reducer;