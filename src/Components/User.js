import React from "react";
import {useUsersContext} from "../hooks/useUsersContext";

const User = ({ user }) => {
    const {id, username} = user;
    const { dispatch } = useUsersContext();

    const handleDelete = ( id ) => {
        dispatch({type: 'DELETE_USER', payload: id})
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