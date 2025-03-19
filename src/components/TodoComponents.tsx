import {useEffect, useState} from "react";
import {ITodo} from "../models/ITodo.ts";
import {getTodos} from "../services/api.service.ts";
import TodoComponent from "./TodoComponent.tsx";

const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        getTodos()
            .then(value => setTodos(value))
    }
    , [])

    return (
        <div>
            {
                todos.map((todo) => {
                    return (
                        <div key={todo.id}>
                            <TodoComponent item={todo}/>

                        </div>
                    )
                })
            }

        </div>
    );
};

export default TodoComponents;