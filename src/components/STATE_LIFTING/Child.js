import React from 'react';

const Child = (props) => {

    return (
        <div>
            <p> I am Child Component </p>
            <p>{ props.data }</p>
        </div>
    )
};
export default Child;