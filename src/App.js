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
        age         : 29,
        phones      : [
            { home        : "01786287789" },
            { office      : "01777893854" }
        ]
    }
]

export default function App() {
    return (
        <div>
            <h1>Nested Lists</h1>
            {
                users.map( (user, index) => (
                    <article key={index}>
                    <h3>User Name : { user.fullName }</h3>
                    <p>Age : { user.age }</p>
                    {
                        user.phones.map( ( phone, index ) => (
                            <div key={index}>
                            <p>{ phone.home }</p>
                            <p>{ phone.office }</p>
                        </div>) )
                    }
                </article>)  )
            }
        </div>
    );
};