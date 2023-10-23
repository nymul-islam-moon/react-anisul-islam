import React, {useContext} from "react";
import {UserContext} from "./UserContext";

const Component4 = () => {
    const {id, name} = useContext(UserContext);
    return (
        <div>
            <h4>ID   : { id }</h4>
            <h4>Name : { name }</h4>
        </div>
    )
}

export default Component4;