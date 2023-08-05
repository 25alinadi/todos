import {configureStore} from '@reduxjs/toolkit'
import todosReducer from "../store/todoStore"


export const store = configureStore({
    reducer: {
        todos: todosReducer
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch