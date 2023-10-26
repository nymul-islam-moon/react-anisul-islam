import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Contacts from "./Contacats";
import Create from "./Create";

const dummyUsers = [
    {
        id: 1,
        name: 'Nymul Islam',
        phone: '01786283389',
        email: 'towkir1997islam@gmail.com',
        address: 'Mohammadpur, Dhaka',
    },
    {
        id: 2,
        name: 'Towkir Islam',
        phone: '01786287789',
        email: 'nymul.islam@gmail.com',
        address: 'Dhaka, Bangladesh'
    },
    {
        id: 3,
        name: 'Arif Islam',
        email: 'arif@gmail.com',
        phone: '01839456456',
        address: 'Chittagong, Bangladesh'
    },
    {
        id: 4,
        name: 'Arif Islam',
        email: 'arif@gmail.com',
        phone: '01839456456',
        address: 'Chittagong, Bangladesh'
    }
];

const Home = () => {
    return (
        <div className="container">
            <h1 style={{ color:"white" }}>Contacts List</h1>
            <Create />
            <Contacts contacts={dummyUsers}/>
        </div>
    );
};

export default Home;