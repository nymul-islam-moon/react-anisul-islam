/**
 * Third Party Section
 */
import React, {useState} from 'react';

/**
 * Component Section
 */

export default function App() {

    /**
     * Todo component | Difference between component and function is that component name will start capital latter and always return a value.
     * @constructor
     */
    const Todo = ( props ) => {
        return <div>
            <h1>I am ToDo</h1>
            <h3>{ props.title }</h3>
        </div>
    }

    return (
        <div>
            <Todo title="todo title"/>
        </div>
    );
}