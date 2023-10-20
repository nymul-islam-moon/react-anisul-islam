import React from "react";

const UserForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitted');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="userName">User Name : </label>
                <input type="text" id="userName" />
            </div>

            <div>
                <label htmlFor="password">Password : </label>
                <input type="password" id="password" />
            </div>
            <button type="submit">Register</button>
        </form>
    )
}
export default UserForm;