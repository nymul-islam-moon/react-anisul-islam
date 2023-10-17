import React from 'react';

import Todo from './Todo';
import Style from './todos.module.css';

const Todos = ( props ) => {
    return (
        <section className={Style.todos}>
            {
                props.todos.map( ( todo ) => <Todo todo={ todo.todo } key={ todo.id } /> )
            }
        </section>
    )
}

export default Todos;