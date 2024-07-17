//import { createStore } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { authSlice } from './authSlice';

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})
/* const reducer = (state = initialState, action) => {
    if (action.type === "decrement") {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type === "increment") {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === "increase") {
        return {
            ...state,
            counter: state.counter + action.payload
        }
    }
    if (action.type === "toggle") {
        return {
            ...state,
            showCounter: !state.showCounter
        }
    }
    return state
}
export const store = createStore(reducer) */
