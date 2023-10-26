import React from "react";

const Contact = ({contact}) => {

    const {name, email, phone, address} = contact;

    return (
        <article>
            <div>
                <h3>{ name }</h3>
                <address>
                    Email : { email } <br/>
                    Phone : { phone } <br/>
                    Address : { address } <br/>
                </address>
            </div>
            <div>
                <button><i className="fa fa-trash fa-2x"></i></button>
            </div>
        </article>
    );
};

export default Contact;