import {configureStore} from "@reduxjs/toolkit";
import {todoReducer} from "./state";

const store = configureStore({
    reducer: todoReducer
})

export default store