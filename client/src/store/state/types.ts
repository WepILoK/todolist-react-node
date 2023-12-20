export interface IState {
    data: ITodo[]
}

export interface ITodo {
    _id: string
    title: string
    isDone: boolean
}