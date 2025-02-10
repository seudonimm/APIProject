import { createAction, createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: null,
        loggedIn: false
    },
    reducers:{
        createAccount: (state, action) => {
            state.user = null;
        },
        createAccountSuccess: (state, action) => {
            state.user = action.payload;
            state.loggedIn = true;
            console.log(state);
        },
        createAccountFailure: (state, action) => {
            state.user = null
            console.log("error");
        },
        login: (state) => {
            state.user = null;
        },
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.loggedIn = true;
        },
        loginFailed: (state) => {
            state.user = null;
        },
        logout: (state) => {

        },
        logoutSuccess: (state) => {
            state.user = null;
            state.loggedIn = false;
        },
        logoutFailed: (state) => {
            //can you fail to log out
        }

    }
});

export const {
    createAccount, 
    createAccountSuccess, 
    createAccountFailure,
    login,
    loginSuccess,
    loginFailed,
    logout,
    logoutSuccess,
    logoutFailed
} = loginSlice.actions;

export default loginSlice;