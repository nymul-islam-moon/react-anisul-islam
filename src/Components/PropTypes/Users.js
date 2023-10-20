/**
 * Import Third Party
 */
import React, {useState} from "react";
/**
 * Import Custom
 */
import User from "./User";

const Users = () => {

    const [user, setUser] = useState({
        id: 101,
        name: 'Nymul Islam',
    });

    return (
        <>
            <User user={user} />
        </>
    );
};

export default Users;