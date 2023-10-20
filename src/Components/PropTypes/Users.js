/**
 * Import Third Party
 */
import React, {useState} from "react";
/**
 * Import Custom
 */
import User from "./User";

const Users = () => {

    const [userName, setUserName] = useState('Nymul Islam');

    return (
        <>
            <User userName={userName}/>
        </>
    );
};

export default Users;