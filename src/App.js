import React from 'react';
import './style.css';

export default function App() {

    const handleChildClick = (event) => {
        event.stopPropagation();
        console.log( 'Child Event : ', event);
    }

    const handleParentClick = ( event ) => {
        console.log( 'Parent Event : ',  event );
    }


    return (
        <div className="parent" onClick={handleParentClick}>
            <h1>Welcome Every One</h1>
            <button onClick={handleChildClick}>+</button>
        </div>
    );
}