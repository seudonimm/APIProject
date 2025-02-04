import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { retrieveAllUserData } from "../services/APIServices";

// export const retrieveData = createAsyncThunk('list/retrieve',
//     async() => {
//         try {
//             let res = await retrieveAllUserData(URL+"/getinfo");
//             console.log(res.data)
//             return {sucess: true, data: res.data};
    
//         } catch (error) {
//             console.log(error)
//             return {sucess: false, data: null};

//         }
//     }
// );
const listSlice = createSlice({
    name: 'list',
    initialState: {
        value: null
    },
    reducers: {
        getData: (state, payload) => {

        },
        getDataSuccess: (state, action) => {
            state.value = action.payload;
            console.log(state.value);
        },
        getDataFailed: (state) => {
            state.value = null;
            //console.log("error " + action.payload);
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(retrieveData.fulfilled, (state, action) => {
    //         state.value=null;
    //         state.value = action.payload;
    //         console.log("retrieving" + action.payload.sucess);
    //     })
    // }
})

export const {getData, getDataSuccess, getDataFailed} = listSlice.actions

export default listSlice;