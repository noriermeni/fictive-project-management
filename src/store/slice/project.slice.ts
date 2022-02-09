import { createSlice } from '@reduxjs/toolkit'

const projectSlice = createSlice({
    name: 'project',
    initialState: {
        selectedUsersList: [],
        employeesPanel: false
    },
    reducers: {
        setSelectedUsers(state, action) {
            state.selectedUsersList = action.payload;
            state.employeesPanel = true;
            console.log('test')
        },
        clearSelectedUsers(state) {
            state.selectedUsersList = [];
            state.employeesPanel = false;
        }
    },
})

export const {
    setSelectedUsers,
    clearSelectedUsers
} = projectSlice.actions;

export default projectSlice.reducer;