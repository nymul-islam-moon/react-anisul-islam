import React, {useState} from "react";
import Component2 from "./Component2";

const Component1 = () => {
    const [user, setUser] = useState({id: 101, name: "Nymul Islam"});
    return (
        // <div>Component 1</div>
        <Component2 user={user} />
    )
}

export default Component1;