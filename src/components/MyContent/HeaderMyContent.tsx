import Grid from "@mui/material/Grid";
import React, {FC, useState} from "react";
import {Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography} from "@mui/material";
import {Filter} from "../../contract/enums";
import AddTaskDialog from "../AddTaskDialog";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {todosActions} from "../../store/todoStore";
import {useAppSelector} from "../../hooks/useAppSelector";

interface IHeaderMyContentProps {
    count: number,
}

const HeaderMyContent: FC<IHeaderMyContentProps> = ({count}) => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const filter = useAppSelector(state => state.todos?.filter)
    const dispatch = useAppDispatch()

    const handlerNewTask = (title: string, description: string) => {
        dispatch(todosActions.addTodo({id:count + 1, title: title, description: description, status: false}))
        setShowModal(false)
    }

    const handleChangeFilter = (e: SelectChangeEvent) => {
        dispatch(todosActions.changeFilter(parseInt(e.target.value)))
    }

    return (
        <>
            <AddTaskDialog show={showModal} handleShow={setShowModal} addTaskToList={handlerNewTask}/>
            <Grid container spacing={2} columns={16} className={"mb-6"}>
                <Grid item xs={8}>
                    <Typography variant={"h4"} component={"h2"}>Todos List</Typography>
                    <Typography component={"p"}>{`counts: ${count}`}</Typography>
                </Grid>
                <Grid item xs={8}>
                    <div className={"flex flex-row justify-end items-center"}>
                        <FormControl sx={{m: 1, minWidth: 120}} size="small">
                            <InputLabel id="demo-select-small-label">Filter</InputLabel>
                            <Select labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={filter + ""}
                                    label="Filter"
                                    onChange={handleChangeFilter}
                            >
                                <MenuItem value={Filter.ALL}>All</MenuItem>
                                <MenuItem value={Filter.COMPLETE}>Complete</MenuItem>
                                <MenuItem value={Filter.NOT_COMPLETE}>Not Complete</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant="contained" onClick={() => setShowModal(true)}>Add Task</Button>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default HeaderMyContent