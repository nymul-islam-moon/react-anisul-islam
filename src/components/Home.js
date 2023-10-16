import React from 'react';

import Todos from './Todos';

const dummyTodos = [
    {
        id : 1,
        title : 'todo title 1',
        desc: "description 1",
    },
    {
        id : 2,
        title : 'todo title 2',
        desc: "description 1",
    }
]

const Home = () => {
    return <div>
        <Todos todos={dummyTodos}/>
    </div>
}

export default Home;