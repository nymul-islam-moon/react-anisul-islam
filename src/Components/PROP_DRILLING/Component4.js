import React, {useContext} from "react";
import {UserContext} from "./UserContext";

const Component4 = () => {
    const {user, text} = useContext(UserContext);
    return (
        <div>
            <h4>ID   : { user.id }</h4>
            <h4>Name : { user.name }</h4>
            <p>The text is : { text } </p>
        </div>
    )
}

export default Component4;