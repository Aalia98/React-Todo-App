import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // add todo
        addTodo: (state, action) => {
            state.todos.push(action.payload)

            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
        // delete todo
        dltTodo: (state, action) => {
            let idx = state.todos.find((item) => item.id == action.payload)
            state.todos.splice(idx, 1)

            localStorage.setItem("todos", JSON.stringify(state.todos))
        }
    }
})

export default todoSlice.reducer
export const {addTodo, dltTodo} = todoSlice.actions