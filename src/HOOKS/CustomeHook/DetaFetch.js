import react, { useEffect, useState } from "react";
import useFetch from "./useFetch";

const DataFetch = () => {

    const { data, isLoading, error } = useFetch( "https://jsonplaceholder.typicode.com/todos" );

    const loadingMessage = <p style={ { color:"greenyellow" } }>Data is loading...</p>;
    const errorMessage = <p style={ { color: "red" } }>{ error }</p>;

    const todosElement = data && data.map( ( todo ) => {
        return <p key={ todo.id }> { todo.title } </p>
    });

    return (
        <div>
            <h1>Todos</h1>
            { isLoading && loadingMessage }
            { error && errorMessage }
            { todosElement }
        </div>
    )
}

export default DataFetch;