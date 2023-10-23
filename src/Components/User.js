import React from "react";

const User = ({user, handleDeleteUser}) => {
    const {id, username} = user;

    const handleDelete = ( id ) => {
        handleDeleteUser( id );
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