import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const User = () => {
   const { userId } = useParams();
   const [ searchParams, setSearchParams ] = useSearchParams();
   // console.log( searchParams.get("id") );
    return (
        <div>
            <h1>User : </h1>
            <h3>{ searchParams.get("id") }</h3>
        </div>
    );
};

export default User;