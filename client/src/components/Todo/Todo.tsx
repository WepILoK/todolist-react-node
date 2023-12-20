import {TodoItemButtons, TodoItemTitle, TodoItemTitleTextArea, TodoItemWrapper} from "./Todo.style.ts";
import {Button} from "../Button/Button.tsx";
import done from "../../assets/done.svg"
import edit from "../../assets/edit.svg"
import close from "../../assets/close.svg"
import save from "../../assets/save.svg"
import React, {memo, useState} from "react";
import {ITodo, removeTodo, updateTodo} from "../../store/state";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store";

interface TodoProps {
    todoData: ITodo
}

export const Todo: React.FC<TodoProps> = memo(({todoData}) => {
    const [isRedact, setIsRedact] = useState(false)
    const [item, setItem] = useState(todoData)
    const dispatch = useDispatch<AppDispatch>()

    const todoSave = () => {
        if (item.title.length >= 10 && item.title.length <= 400) {
            dispatch(updateTodo(item))
                .then(() => {
                    setIsRedact(false)
                })
                .catch(() => {
                })
        } else {
            alert('min: 10, max: 400')
        }
    }

    const todoDone = () => {
        dispatch(updateTodo({...item, isDone: true}))
            .then(() => {
            })
            .catch(() => {
            })
    }

    const deleteTodo = () => {
        dispatch(removeTodo(item._id))
            .then(() => {
            })
            .catch(() => {
            })
    }

    return (
        <TodoItemWrapper>
            {isRedact
                ? <TodoItemTitleTextArea
                    value={item.title}
                    maxLength={400}
                    onChange={event => {
                        setItem(prevState => ({
                            ...prevState,
                            title: event.target.value
                        }))
                    }}
                />
                : <TodoItemTitle>
                    {item.title}
                </TodoItemTitle>
            }
            <TodoItemButtons>
                {isRedact
                    ? <Button
                        icon={save}
                        onClick={() => {
                            setIsRedact(false)
                            todoSave()
                        }}
                        color={'rgba(254,209,51,0.98)'}
                    />
                    : <>
                        <Button
                            icon={done}
                            onClick={() => {
                                todoDone()
                            }}
                            color={'rgba(14,217,13,0.99)'}
                        />
                        <Button
                            icon={edit}
                            onClick={() => {
                                setIsRedact(true)
                            }}
                            color={'rgba(254,209,51,0.98)'}
                        />
                        <Button
                            icon={close}
                            onClick={() => {
                                deleteTodo()
                            }}
                            color={'rgba(255,31,31,0.97)'}
                        />
                    </>
                }
            </TodoItemButtons>
        </TodoItemWrapper>
    )
})