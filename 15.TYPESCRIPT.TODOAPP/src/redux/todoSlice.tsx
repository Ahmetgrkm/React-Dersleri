import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoInitilalState, TodoType } from '../types/types'


const initialState: TodoInitilalState = {
    todos: []
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createTodo: (state: TodoInitilalState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos, action.payload]

        },

        removeTodoById: (state: TodoInitilalState, action: PayloadAction<number>) => {
            state.todos = [...state.todos.filter((todo: TodoType) => todo.id !== action.payload)]
        },

        updateTodo: (state: TodoInitilalState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos.map((todo: TodoType) => todo.id !== action.payload.id ? todo : action.payload)]
        }
    }

})

export const { createTodo, removeTodoById, updateTodo } = todoSlice.actions
export default todoSlice.reducer