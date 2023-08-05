import {FC} from "react";
import {Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import HeaderMyContent from "./HeaderMyContent";
import {useAppSelector} from "../../hooks/useAppSelector";
import MyRadio from "../MyRadio";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {todosActions} from "../../store/todoStore";
import {Filter} from "../../contract/enums";
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
const MyContent: FC = () => {
    const todosState = useAppSelector(state => {
        if (state.todos.filter === Filter.COMPLETE) {
            return state.todos.todos.filter(todo => todo.status);
        } else if (state.todos.filter === Filter.NOT_COMPLETE) {
            return state.todos.todos.filter(todo => !todo.status);
        } else {
            return state.todos.todos;
        }
    })
    const dispatch = useAppDispatch()
    const handlerTaskStatus = (id: number) => {
        dispatch(todosActions.statusToggle(id))
    }

    return (
        <Container maxWidth={"xl"}>
            <HeaderMyContent count={todosState?.length}/>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"/>
                            <TableCell>Title</TableCell>
                            <TableCell align="left">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todosState?.length > 0 ? (todosState?.map((todo, index) => (
                            <TableRow
                                key={index}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell align="center" className={"cursor-pointer"}><AppsOutlinedIcon fontSize={"small"} /></TableCell>
                                <TableCell component="th" scope="row">
                                    <div className={"flex flex-row items-center"}>
                                        <MyRadio isChecked={todo?.status} handlerClick={() => handlerTaskStatus(todo.id)}/>
                                        <div className={`${todo?.status ? "line-through" : ""}`}>{todo?.title}</div>
                                    </div>

                                </TableCell>
                                <TableCell component="th" scope="row"
                                           className={`${todo?.status ? "line-through" : ""}`}>{todo?.description}</TableCell>
                            </TableRow>
                        ))) : <div />}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default MyContent