import {ITodoData, ITodoStoreData} from "../contract/data";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Filter} from "../contract/enums";

const initialState: ITodoStoreData = {
    todos: [
        {
            id: 1,
            title: "task 1",
            description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            status: false
        },
        {
            id: 2,
            title: "task 2",
            description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            status: false
        },
        {
            id: 3,
            title: "task 3",
            description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            status: false
        },
    ],
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