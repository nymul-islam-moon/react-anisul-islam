import React from "react";
import User from "./User";
import {useUsersContext} from "../hooks/useUsersContext";

const Users = () => {
    const { state } = useUsersContext();
    return (
        <section className="users">
            {state.users.map(user => <User key={user.id} user={user} />)}
        </section>
    );
};

export default Users;