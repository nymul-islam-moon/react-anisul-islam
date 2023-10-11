import React from 'react';


function Welcome () {
    return <h1>Welcome</h1>;

}

function Welcome2 () {
    return React.createElement( "h1", {}, "Welcome" );
}

function Todo () {
    return <div>
        <h3>Todo Title</h3>
        <p>Todo Desc</p>
    </div>
}

function Todo2 () {
    return React.createElement( "div", {}, React.createElement( "p", {} , "Todo Title 2"),
        React.createElement( "p", {} , "Todo Description 2")
    );
}

function App() {
    return (
        <div>
            <Welcome />
            <Welcome2 />
            <Todo />
            <Todo2 />
        </div>
    )
}

export default App;