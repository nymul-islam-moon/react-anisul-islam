import React, {useContext} from "react";
import {UsersContext} from "../Context/UsersContext";

const User = ({ user }) => {
    const {id, username} = user;
    const { users, setUsers } = useContext( UsersContext );

    const handleDelete = ( id ) => {
        const filteredUsers = users.filter( (user) => user.id !== id );
        setUsers(filteredUsers);
    }

    return (
        <article className="user">
            <h2>ID : {id}</h2>
            <p>User Name : {username}</p>
            <button className="btn-dlt" onClick={() => {handleDelete(id)}}>Delete</button>
        </article>
    );
};

export default User;