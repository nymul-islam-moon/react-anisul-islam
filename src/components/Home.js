import React, { useState } from 'react';

import { v4 as uuidv4 } from "uuid";

import Todos from './Todos';
import Style from './home.module.css';
import NewTodo from "./NewTodo";

const dummyTodos = [
    // {
    //     id :   1,
    //     title : 'todo title 1',
    //     desc: "description 1",
    // },
    // {
    //     id : 2,
    //     title : 'todo title 2',
    //     desc: "description 1",
    // }
]

const Home = () => {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = ( todo ) => {
        setTodos(( prevTodos ) => {
            return [ ...prevTodos, { id:uuidv4(), todo } ]
        })
    }

    return <div className={Style.container}>
        <h1 style={{color : "white"}}>TODO APP</h1>
        <NewTodo onAddTodo={ handleAddTodo }/>
        <Todos todos={ todos }/>
    </div>
}

export default Home;