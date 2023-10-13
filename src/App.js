/**
 * Third Party Section
 */
import React, {useState} from 'react';

/**
 * Component Section
 */
import Child from "./components/STATE_LIFTING/Child";

export default function App() {

    const data = "I am from Parent ( APP )";
    const handleChildData = ( childData ) => {
        console.log( "App : " + childData );
    }
    return (
        <div className="counter center">
            <Child data={data} onChildData={handleChildData}/>
        </div>
    );
}