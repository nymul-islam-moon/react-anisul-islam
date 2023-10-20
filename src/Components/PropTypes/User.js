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
            <h3>{props.user.id}</h3>
            <h3>{props.user.name}</h3>
        </div>
    );
};

/**
 * User Name and User Id type checks
 * @type {{userName: Requireable<string>, userId: Requireable<number>}}
 */
User.propTypes = {
    // key-value
    user: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
    }),
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