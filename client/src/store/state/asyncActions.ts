import {createAsyncThunk} from "@reduxjs/toolkit";
import {ITodo} from "./types";
import axios from "../../global/api";

export const fetchTodos = createAsyncThunk<ITodo[]>("/state/fetchPosts", async () => {
    const {data} = await axios.get("/api/todos")
    return data.data
})

export const createTodo = createAsyncThunk("/state/createTodo", async (title: string) => {
    const {data} = await axios.post("/api/todos", {title})
    return data.data
})

export const updateTodo = createAsyncThunk<ITodo, ITodo>("/state/updateTodo", async (todo: ITodo) => {
    const {data} = await axios.patch(`/api/todos/${todo._id}`, todo)
    return data.data
})

export const removeTodo = createAsyncThunk<string, string>("/state/removeTodo", async (id: string) => {
    await axios.delete(`/api/todos/${id}`)
    return id
})
