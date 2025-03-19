import {FC} from "react";
import {ITodo} from "../models/ITodo.ts";

type IPropsTodo ={
    item: ITodo
}

const TodoComponent:FC<IPropsTodo> = ({item}) => {
    return (
        <div>
            {
                item.title + " " + item.completed + " " + item.id + " " + item.userId

            }

        </div>
    );
};

export default TodoComponent;