import React from 'react';

const NewTodo = ( props ) => {
    props.onHandleNewTodo({
        title: 'I am New Todo',
    });
    return <div>
        <h1> New ToDo </h1>
    </div>
};

export default NewTodo;