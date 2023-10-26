import React from "react";
import Contact from "./Contact";


const Contacts = ( {contacts} ) => {

    return (
        <section>
            {
                contacts.map((contact) => <Contact key={contact.id} contact={contact}/>)
            }
        </section>
    );
};

export default Contacts;