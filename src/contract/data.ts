import {Filter} from "./enums";

export interface ITodoStoreData{
    todos: Array<ITodoData>,
    filter: Filter
}

export interface ITodoData{
    id: number,
    title: string,
    description: string,
    status: boolean
}