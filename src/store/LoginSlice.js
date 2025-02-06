import { createAction, createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: null
    },
    reducers:{
        createAccount: (state, action) => {
            state.user = null;
        },
        createAccountSuccess: (state, action) => {
            state.user = action.payload;
        },
        createAccountFailure: (state, action) => {
            state.user = null
            console.log("error");
        }
    }
});

export const {createAccount, createAccountSuccess, createAccountFailure} = loginSlice.actions;

export default loginSlice;