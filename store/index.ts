import {configureStore,combineReducers} from "@reduxjs/toolkit"; // rtk的内部函数
import {persistReducer, persistStore} from "redux-persist";  // redux持久化插件
import storage from 'redux-persist/lib/storage';     // 本地存储
import storageSession from 'redux-persist/lib/storage/session'; // 会话存储
import thunk from "redux-thunk";    //
import languageReducer from './language/language'
// combineReducers 合并reducer
const reducers = combineReducers({
    language:languageReducer
})
const persistConfig = {
    key: 'root',
    version: 1,
    storage: storageSession,
    whitelist: [],      //需要缓存的reducer
    blacklist: ['test']  //不缓存的reducer
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})
export default store