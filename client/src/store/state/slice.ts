import {ActionReducerMapBuilder, createSlice} from "@reduxjs/toolkit";
import {IState} from "./types";
import {createTodo, fetchTodos, removeTodo, updateTodo} from "./asyncActions";

const initialState: IState = {
    data: []
}

const companySlice = createSlice({
    name: "state",
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<IState>) => {
        builder
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.data = action.payload
            })
            .addCase(fetchTodos.rejected, () => {
                throw Error
            })
            .addCase(createTodo.fulfilled, (state, action) => {
                state.data = [action.payload, ...state.data]
            })
            .addCase(createTodo.rejected, () => {
                throw Error
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                if(action.payload.isDone) {
                    state.data = state.data.filter((item) => item._id !== action.payload._id)
                } else {
                    state.data = state.data.map((item) => {
                        if(item._id === action.payload._id) {
                            return action.payload
                        } else return item
                    })
                }
            })
            .addCase(updateTodo.rejected, () => {
                throw Error
            })
            .addCase(removeTodo.fulfilled, (state, action) => {
                state.data = state.data.filter((item) => item._id !== action.payload)
            })
            .addCase(removeTodo.rejected, () => {
                throw Error
            })
    }
})

export const todoReducer = companySlice.reducer

export const {
} = companySlice.actions