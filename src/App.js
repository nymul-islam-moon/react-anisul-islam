import React, { useState, useEffect } from 'react';
import Style from './style.css';

const App = () => {
    
    const [name, setName] = useState("");
    const [ validInput, setValidInput ] = useState(true);

    useEffect(() => {
        if (name.length < 2) {
            setValidInput(false);
        } else {
            setValidInput(true);
        }
    }, [name]);


    const handleChange = ( e ) => {
        setName( e.target.value );

    };

    return (
        <div className="container">
            <input type="text" value={name} onChange={handleChange} className={`${validInput ? 'valid' : 'invalid'}`} />
        </div>
    );
};

export default App;