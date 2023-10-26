import React from "react";

const Contact = ({contact}) => {

    const {name, email, phone, address} = contact;

    const handleEdit = () => {
        console.log('edit clicked');
    }

    return (
        <article className="contact">
            <div>
                <h3 className="title-name">{ name }</h3>
                <address>
                    Email : { email } <br/>
                    Phone : { phone } <br/>
                    Address : { address } <br/>
                </address>
            </div>
            <div>
                <button className="btn-delete"><i className="fa fa-trash fa-2x"></i></button>
                <button className="btn-edit" onClick={handleEdit}><i className="fa fa-pencil fa-2x"></i></button>
            </div>
        </article>
    );
};

export default Contact;