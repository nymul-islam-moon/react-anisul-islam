import React from 'react';
import Todos from "./Todos";
import NewTodo from "./NewTodo";

const Home = () => {

    const todos = [
        'todo1',
        'todo2',
        'todo3',
    ]

    return (
        <div>
            <NewTodo />
            <Todos todos={todos}/>
        </div>
    )
}

export default Home;