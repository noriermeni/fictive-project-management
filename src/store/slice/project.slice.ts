import { createSlice } from '@reduxjs/toolkit'

const projectSlice = createSlice({
    name: 'project',
    initialState: {
        selectedUsersList: [],
        employeesPanel: false,
        selectedProjectTasks: [],
        selectedProjectChildrens: []
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
        }
    },
})

export const {
    setSelectedUsers,
    clearSelectedUsers,
    setSelectedProjectTasks
} = projectSlice.actions;

export default projectSlice.reducer;