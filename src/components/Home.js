import React from "react";
import Contacts from "./Contacats";
import Create from "./Create";
import FetchData from "./FetchData";


const url = 'http://localhost:8888/webapick/wp-json/academy/v1/contacts';

const Home = () => {

    const contacts = FetchData( url );

    return (
        <div className="container">
            <h1 style={{ color:"white" }}>Contacts List</h1>
            <Create />
            <Contacts contacts={contacts}/>
        </div>
    );
};

export default Home;