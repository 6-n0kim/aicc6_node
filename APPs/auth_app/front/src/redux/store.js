import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './slice/authSlices';

const store = configureStore({
    reducer: combineReducers({
        auth: authReducer,
    }),
})

export default store;