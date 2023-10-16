import React, {useState} from 'react';

import Style from './newtodo.module.css';

const NewTodo = () => {

    const [todo, setTodo] = useState({title: "", desc: ""});

    // const {}

    const handleSubmit = ( event ) => {
        event.preventDefault();
    }

    return (
        <form className={Style.form} onSubmit={handleSubmit}>
            <div className={Style["form-field"]}>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" name="title" value={todo.title} />
            </div>

            <div className={Style["form-field"]}>
                <label htmlFor="desc">Description: </label>
                <textarea type="text" id="desc" name="desc" value={todo.desc} />
            </div>
            <button type="submit">Add Todo</button>

        </form>
    )
}

export default NewTodo;