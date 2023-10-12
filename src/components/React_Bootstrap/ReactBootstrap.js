import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ReactBootstrap = () => {
    return <Card style={{width:"20rem"}}>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>You need to install Node.js for local development. You can also choose to use Node.js in production, but you don’t have to. Many React frameworks support export to a static HTML/CSS/JS folder.</Card.Text>
            <Button className='btn btn-success'>Lorem More</Button>
        </Card.Body>
    </Card>;
};

export default ReactBootstrap;