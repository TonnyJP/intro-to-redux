import { createSlice } from "@reduxjs/toolkit";
const authentificationInitState = {
    isAuthentificated: false
}
export const authSlice = createSlice({
    name: "authentification",
    initialState: authentificationInitState,
    reducers: {
        login(state) {
            state.isAuthentificated = true
        },
        logout(state) {
            state.isAuthentificated = false
        }
    }
})

