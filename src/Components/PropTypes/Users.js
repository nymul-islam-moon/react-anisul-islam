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
    const [userId, setUserId] = useState();

    return (
        <>
            <User userName={userName} userId={userId}/>
        </>
    );
};

export default Users;