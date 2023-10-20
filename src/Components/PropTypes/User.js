/**
 * Import Third Party
 */
import React from "react";
import PropTypes from "prop-types";
/**
 * Import Custom
 */

console.log(PropTypes);

const User = ( props ) => {
    return (
        <div>
            <h1>{props.userName}</h1>
            <h1>{props.userId}</h1>
        </div>
    );
};

User.propTypes = {

}

export default User;