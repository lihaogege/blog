import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "searchDrop",
    initialState: {
        searchFlag:false
    },
    reducers:{
        setSearchFlag(state,action){
            state.searchFlag = action.payload
        },
    }
})
export const {setSearchFlag}= searchSlice.actions

export default searchSlice.reducer