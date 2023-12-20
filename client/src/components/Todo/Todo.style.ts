import styled from '@emotion/styled'

export const TodoListWrapper = styled.div`
    max-height: 80vh;
    height: 80vh;
    padding: 10px 20px;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #ffffff;
`

export const TodoItemWrapper = styled.div`
    display: flex;
    background-color: #ececec;
    border-radius: 6px;
    padding: 12px;
    width: 500px;
    height: 90px;
    margin-bottom: 10px;

    &:last-child {
        margin-bottom: 0;
    }
`

export const TodoItemTitle = styled.div`
    flex: 1 1 auto;
    font-size: 16px;
    overflow: auto;
    height: 90px;
    margin-right: 6px;
`

export const TodoItemTitleTextArea = styled.textarea`
    flex: 1 1 auto;
    font-size: 16px;
    overflow: auto;
    height: 85px;
    margin-right: 6px;
    resize: none;
    border: none;
    outline: none;
`

export const TodoItemButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 0 0 70px;
    margin-left: 6px;
    border-radius: 0 10px 10px 0;
    overflow: hidden;
`

