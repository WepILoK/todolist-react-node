import {TodoItemButtons, TodoItemTitleTextArea, TodoItemWrapper} from "./Todo.style.ts";
import {Button} from "../Button/Button.tsx";
import add from "../../assets/add.svg";
import {memo, useState} from "react";
import {AppDispatch} from "../../store";
import {useDispatch} from "react-redux";
import {createTodo} from "../../store/state";

export const TodoCreate = memo(() => {
    const [title, setTitle] = useState("")
    const dispatch = useDispatch<AppDispatch>()

    const handleSubmit = () => {
        if (title.length >= 10 && title.length <= 400) {
            dispatch(createTodo(title.trim()))
                .then(() => {
                    setTitle('')
                })
                .catch(() => {
                })
        } else {
            alert('min: 10, max: 400')
        }
    }

    return (
        <TodoItemWrapper>
            <TodoItemTitleTextArea
                value={title}
                maxLength={400}
                onChange={event => {
                    setTitle(event.target.value)
                }}
            />
            <TodoItemButtons>
                <Button
                    icon={add}
                    onClick={() => {
                        handleSubmit()
                    }}
                    color={'rgba(0,98,210,0.91)'}
                />
            </TodoItemButtons>
        </TodoItemWrapper>
    )
})