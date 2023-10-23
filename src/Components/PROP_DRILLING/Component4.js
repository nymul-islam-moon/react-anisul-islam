import React from "react";

const Component4 = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            <h4>ID   : { id }</h4>
            <h4>Name : { name }</h4>
        </div>
    )
}

export default Component4;