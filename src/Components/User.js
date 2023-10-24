import React from "react";
import {useUsersContext} from "../hooks/useUsersContext";

const User = ({ user }) => {
    const {id, username} = user;
    const { users, setUsers } = useUsersContext();

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