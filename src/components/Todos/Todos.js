import React, {useEffect, useState} from 'react';
import {TodosService} from "../../services";
import {Todo} from "./Todo/Todo";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        TodosService.getAll().then(({data}) => setTodos(data))
    },[])

    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};