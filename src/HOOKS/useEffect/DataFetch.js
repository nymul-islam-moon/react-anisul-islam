import react, { useEffect, useState } from "react";

const DataFetch = () => {

    const [todos, setTodos] = useState( null );
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        setTimeout( () => {
            fetch("https://jsonplaceholder.typicode.com/todos")
                .then((res) => {
                    return res.json()
                })
                .then( (data) => {
                    setTodos(data);
                    setIsLoading(false);
                });
        }, 2000 );
    }, []);

    const todosElement = todos && todos.map( (todo) => {
        return <p key={todo.id}> { todo.title } </p>
    });

    const loadingMesage = <p>Data is loading...</p>;

    return (
        <div>
            <h1>Todos</h1>
            { isLoading && loadingMesage }
            { todosElement }
        </div>
    )
}

export default DataFetch;