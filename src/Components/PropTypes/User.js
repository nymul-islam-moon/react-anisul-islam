/**
 * Import Third Party
 */
import React from "react";
import PropTypes from "prop-types";
/**
 * Import Custom
 */


const User = ( props ) => {
    return (
        <div>
            <h1>{props.userName}</h1>
            <h1>{props.userId}</h1>
        </div>
    );
};

User.propTypes = {
    // key-value
    userName: PropTypes.string,
    userId: PropTypes.number,
}

export default User;