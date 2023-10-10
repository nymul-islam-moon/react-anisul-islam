import React from "react";

const users = [
    {
        fullName    : "Nymul Islam",
        age         : 27,
        phones      : [
            {
                home        : "01786287789"
            },
            {
                office      : "01786287789"
            }
        ]
    },
    {
        fullName    : "Towkir Islam",
        age         : 27,
        phones      : [
            {
                home        : "01786287789"
            },
            {
                office      : "01786287789"
            }
        ]
    }
]

export default function App() {
    return (
        <div>
            <h1>Nested Lists</h1>
            {
                users.map( (user, index) => <artical key={index}>
                    <h3>{user.fullName}</h3>
                    <p>{user.age}</p>
                    {
                        user.phones.map( (phone, index) => <div>
                            <p>Home     : { phone.home }</p>
                            <p>Office   : { phone.office } </p>
                        </div> )
                    }
                </artical>  )
            }
        </div>
    );
};