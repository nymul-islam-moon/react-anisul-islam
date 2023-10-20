/**
 * Import Third Party
 */
import React, {useState} from "react";
/**
 * Import Custom
 */
import User from "./User";

const Users = () => {

    const [user, setUser] = useState('moon');

    return (
        <>
            <User user={user} />
        </>
    );
};

export default Users;