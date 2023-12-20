import './App.css'
import {LayoutStyle} from "./components/Layout/Layout.style.ts";
import {TodoListWrapper} from "./components/Todo/Todo.style.ts";
import {Todo} from "./components/Todo/Todo.tsx";
import {TodoCreate} from "./components/Todo/TodoCreate.tsx";
import {useEffect} from "react";
import {fetchTodos, selectData} from "./store/state";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "./store";

function App() {
    const dispatch = useDispatch<AppDispatch>()
    const data = useSelector(selectData)

    useEffect(() => {
        dispatch(fetchTodos())
    }, [])

    return (
        <LayoutStyle>
            <TodoListWrapper>
                <TodoCreate/>
                {data.map((item) => {
                    return (
                        <Todo key={item._id} todoData={item}/>
                    )
                })}
            </TodoListWrapper>
        </LayoutStyle>
    )
}

export default App