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

/**
 * User Name and User Id type checks
 * @type {{userName: Requireable<string>, userId: Requireable<number>}}
 */
User.propTypes = {
    // key-value
    userName: PropTypes.string,
    userId: PropTypes.number,
}

/**
 * Set Default values
 * @type {{userName: string, userId: number}}
 */
User.defaultProps = {
    userName: "Default name",
    userId: 1,
}

export default User;