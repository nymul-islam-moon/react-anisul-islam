import React from 'react';
import ReactDOM from 'react-dom/client';
const todoTitle = 'Call Family';
const todoDecsription = 'Test is the best uses for the life time example for for for.'
const headingStyle = {
    backgroundColor : 'black',
    color : 'cyan',
    textAlign : 'center',
    padding : '15px'
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <h1 className={'headingStyle'}>To DO APP</h1>
        <h3 style={headingStyle}>{todoTitle}</h3>
        <p>{todoDecsription}</p>
        <p>{new Date().getFullYear()}</p>
    </div>
);