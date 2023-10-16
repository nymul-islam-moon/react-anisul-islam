/**
 * Third Party Section
 */
import React from 'react';

/**
 * Component Section
 */
import Todo from "./Todo";
import NewTodo from "./NewTodo";


const App = () => {

    const handleNewTodo = (newTodo) => {
        console.log(newTodo);
    }

     return (
         <div>
             <NewTodo onHandleNewTodo={handleNewTodo}/>
               <Todo title={"I am ToDo"}/>
         </div>
     );
};

export default App;