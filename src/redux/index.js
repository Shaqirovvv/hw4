import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducer from "./reduser";

const rootReduser = combineReducers({

    reducer
})
export const store = configureStore({
    reducer:rootReduser
})