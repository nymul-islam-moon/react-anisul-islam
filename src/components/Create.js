import React from "react";

const Create = () => {

    return (
        <>
            <form className="form">
                <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter the name" />
                </div>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter the email" />

                </div>
                <div className="form-field">
                    <label htmlFor="phone">Phone</label>
                    <input type="phone" id="phone" name="phone" placeholder="Enter the phone" />
                </div>
                <div className="form-field">
                    <label htmlFor="address">Address</label>
                    <textarea type="text" id="address" name="address" placeholder="Enter the address"></textarea>
                </div>
                <button type="submit">Create Contact</button>
            </form>
        </>
    );
};

export default Create;