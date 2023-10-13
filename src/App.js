/**
 * Third Party Section
 */
import React, {useState} from 'react';

/**
 * Component Section
 */
import Todo from './Todo';
// import NewTodo from './NewTodo';

export default function App() {

    return (
        <div>
            <h1>Hello</h1>
            {/*<NewTodo />*/}
            <Todo title="todo title"/>
        </div>
    );
}