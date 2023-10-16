import React from "react";

/**
 * Todo component | Difference between component and function is that component name will start capital latter and always return a value.
 * @constructor
 */
const Todo = ( props ) => {
    return <div>
        <h3>{ props.title }</h3>
    </div>
}

export default Todo;