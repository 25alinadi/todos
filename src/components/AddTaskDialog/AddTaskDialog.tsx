import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import {FC, useState} from "react";

interface IAddTaskDialogProps{
    show: boolean,
    handleShow: (value:boolean) => void,
    addTaskToList: (title: string, description: string) => void,
}

const AddTaskDialog:FC<IAddTaskDialogProps> = ({show, handleShow, addTaskToList}) => {
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const handleAddTaskBtn = () => {
        addTaskToList(title, description)
    }

    return (
        <div>
            <Dialog open={show} onClose={handleShow}>
                <DialogTitle>New Task</DialogTitle>
                <DialogContent>
                    <div className={"mb-2"}>
                        <DialogContentText>
                            Please Enter title and description for new task
                        </DialogContentText>
                    </div>
                    <div className={"mb-4"}>
                        <TextField
                            autoFocus
                            id="title"
                            label="Title Task"
                            type="text"
                            fullWidth
                            onChange={(e:any) => setTitle(e.target.value)}
                            variant="standard"
                        />
                    </div>
                    <TextField
                        id="description"
                        label="Description"
                        multiline
                        rows={4}
                        fullWidth
                        onChange={(e:any) => setDescription(e.target.value)}
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleShow(false)}>Cancel</Button>
                    <Button onClick={handleAddTaskBtn}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddTaskDialog