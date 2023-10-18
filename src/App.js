/**
 * Third Party Section
 */
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

/**
 * Component Section | main branch
 */
import Style from './style.css';



const App = () => {

    const handleAddNewTodo = () => {
        toast('New Todo Added');
    }

    const handleDeleteTodo = () => {
        toast('Todo Deleted');
    }

     return (
         <div>
            <h1>TODO APP</h1>
             <button onClick={handleAddNewTodo} >Add New Todo</button>
             <button onClick={handleDeleteTodo} >Delete Todo</button>
             <ToastContainer />
         </div>
     );
};

export default App;