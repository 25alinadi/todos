import {FC} from "react";
import Done from "@mui/icons-material/Done";

interface IMyRadioProps {
    isChecked: boolean,
    handlerClick: () => void
}

const MyRadio: FC<IMyRadioProps> = ({isChecked = false, handlerClick}) => {
    return (
        <div className={"flex flex-row justify-center mr-1.5"}>
            {isChecked ? <div onClick={handlerClick}>
                <Done className={"text-green-700 cursor-pointer"}/>
            </div> : <div className={"w-4 h-4 rounded-full border-2 border-gray-500 cursor-pointer"} onClick={handlerClick} />}
        </div>
    )
}

export default MyRadio