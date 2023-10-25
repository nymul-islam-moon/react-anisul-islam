import React, { useState } from "react";
import {useSearchParams} from "react-router-dom";

const User = () => {
    const [ name, setName ] = useState("");
    const [ age, setAge ] = useState("");
    const [ searchParams, setSearchParams ] = useSearchParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({ name: name, age: age });
    }

    return (
        <div>
            <h1>User : </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="User Name"/>
                <input type="number" value={age} onChange={(e) => { setAge(e.target.value) }} placeholder="User Age"/>
                <button type="submit">Find User</button>
            </form>
        </div>
    );
};

export default User;