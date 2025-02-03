import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { retrieveAllUserData } from "../services/APIServices";

export const retrieveData = createAsyncThunk('list/retrieve',
    async(none, thunkAPI) => {
        try {
            let res = await retrieveAllUserData(URL+"/getinfo");
            console.log(res.data)
            return {sucess: true, data: res.data};
    
        } catch (error) {
            console.log(error)
            return {sucess: false, data: null};

        }
    }
);
const listSlice = createSlice({
    name: 'list',
    initialState: {
        value: null
    },
    reducers: {
        addToList: state => {
            console.log("test");
        },
        removeFromList: state => {

        },
        // refreshList: state => {
            
        //     console.log("refresh "+state.value);
        //     return state;
        // }
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //       serializableCheck: {
    //         // Ignore these action types
    //         ignoredActions: ['list/retrieveData'],
    //         // Ignore these field paths in all actions
    //         ignoredActionPaths: ['payload.data.headers'],
    //         // Ignore these paths in the state
    //         ignoredPaths: ['list.value', 'payload.data.headers'],
    //       },
    //     }),
    extraReducers: (builder) => {
        builder.addCase(retrieveData.fulfilled, (state, action) => {
            state.value=null;
            state.value = action.payload;
            console.log("retrieving" + action.payload.sucess);
        })
    }
})

export const {addToList, removeFromList} = listSlice.actions

export default listSlice;