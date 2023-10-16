import React from 'react';
import Todo from './Todo';

const Todos = ( props ) => {
    return (
        <section>
            {
                props.todos.map( ( todo ) => <Todo todo={ todo } key={ todo.id } /> )
            }
        </section>
    )
}

export default Todos;