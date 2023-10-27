import React from "react";
import Contacts from "./Contacats";
import Create from "./Create";
import FetchData from "./FetchData";
import axios from "axios";

const Home = () => {
    const url = 'http://localhost:8888/webapick/wp-json/academy/v1/contacts';

    const config = {
        auth: {
            username: 'nymulIslam',
            password: 'nymulIslam'
        }
    };

    const contacts = FetchData( url, config );




    // // Make a GET request to the WordPress API
    // axios.get(url, config)
    //     .then(response => {
    //         // Handle the response data
    //         console.log(response.data);
    //     })
    //     .catch(error => {
    //         // Handle any errors
    //         console.error(error);
    //     });

    return (
        <div className="container">
            <h1 style={{ color:"white" }}>Contacts List</h1>
            <Create />
            <Contacts contacts={contacts}/>
        </div>
    );
};

export default Home;