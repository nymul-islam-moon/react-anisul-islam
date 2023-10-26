import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Contacts from "./Contacats";

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
    }
];

const Home = () => {
    return (
        <div>
            <Contacts contacts={dummyUsers}/>
        </div>
    );
};

export default Home;