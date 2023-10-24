import React, {useContext, useState} from "react";
import {UsersContext} from "../Context/UsersContext";

const NewUser = () => {
    const [ username, setUsername ] = useState("");
    const { users, setUsers } = useContext( UsersContext );
    const handleUsernameChange = ( event ) => {
        setUsername(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {id: new Date().getTime().toString(), username: username};
        setUsers(prevUsers => [ ...prevUsers, newUser ]);
        setUsername("");
    }

    return (
        <div>
            <h3>User Registration</h3>
            <form onSubmit={handleSubmit}>
                <input required type="text" name="username" value={username} onChange={handleUsernameChange}/>
                <button type="submit">ADD USER</button>
            </form>
            <br/>
        </div>
    );
};

export default NewUser;