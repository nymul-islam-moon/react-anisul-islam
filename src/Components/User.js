import React from "react";
import {useUsersContext} from "../hooks/useUsersContext";

const User = ({ user }) => {
    const {id, username} = user;
    const { deleteUser } = useUsersContext();

    const handleDelete = ( id ) => {
        deleteUser( id );
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