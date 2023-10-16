import React from 'react'
import Style from './todo.module.css';

const Todo = ( props ) => {
    const { title, desc, id } = props.todo;
    return (
        <article className={Style.todo}>
            <div>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <div>
                    <button className={Style.btn}>
                        <i className="fa fa-trash fa-2x"></i>
                    </button>
                </div>
            </div>
        </article>
    )
}
export default Todo;