import React from "react";
import Contacts from "./Contacats";
import Create from "./Create";
import FetchData from "./FetchData";

const Home = () => {

    const contacts = FetchData();

    return (
        <div className="container">
            <h1 style={{ color:"white" }}>Contacts List</h1>
            <Create />
            <Contacts contacts={contacts}/>
        </div>
    );
};

export default Home;