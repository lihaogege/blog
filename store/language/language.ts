import {createSlice} from "@reduxjs/toolkit";
import zh_CN from "../../locale/zh-CN";
import en_US from "../../locale/en-US";

const chooseLocale = (language: any) => {
    switch(language){
        case 'en':
            return en_US;
        case 'zh':
            return zh_CN;
        default:
            return zh_CN;
    }
}
const languageSlice = createSlice({
    name: "language",
    initialState: {
        locale: "zh",
        messages:zh_CN
    },
    reducers:{
        setLocale(state,action){
            state.locale = action.payload
            state.messages = chooseLocale(action.payload)
        },
    }
})
export const {setLocale}= languageSlice.actions

export default languageSlice.reducer