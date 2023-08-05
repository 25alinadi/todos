import {ITodoData, ITodoStoreData} from "../contract/data";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Filter} from "../contract/enums";

const initialState: ITodoStoreData = {
    todos: [],
    filter: Filter.ALL
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodoData>) => {
            state.todos = [...state.todos, action?.payload]
            state.filter = Filter.ALL
        },
        statusToggle: (state, action: PayloadAction<number>) => {
            const findIndex = state.todos.findIndex(item => item.id === action?.payload)
            if(findIndex !== -1){
                state.todos[findIndex].status = !state.todos[findIndex].status
            }
        },
        changeFilter: (state, action:PayloadAction<Filter>) => {
            state.filter = action?.payload
        }
    }
})

export const todosActions = todosSlice.actions

export default todosSlice.reducer